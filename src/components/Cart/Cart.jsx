import React from "react";
import { MdDelete } from "react-icons/md";
import "./Cart.scss";
import { makeRequest } from "../../makeRequest";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51NCByeA5BngBYc4kGvpq8tUZIknYOl3HD7PWrk5wIIeGqF90L6JntmuYwcsCI8LCIYZY2PXoF2YQzhjXQxTz6Gxt00o2pRZAqx"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={
              // import.meta.env.VITE_UPLOAD_URL +
              item.img
            }
            alt="product image"
          />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}{" "}
            </div>
          </div>
          <MdDelete
            className="delete"
            color="maroon"
            size={25}
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <button onClick={() => dispatch(resetCart())} className="reset">
        CLEAR CART
      </button>
    </div>
  );
};

export default Cart;
