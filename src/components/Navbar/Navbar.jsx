import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.scss";
import { MdPersonOutline, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="english flag" />
            <MdKeyboardArrowDown />
          </div>
          <div className="item">
            <p>USD</p>
            <MdKeyboardArrowDown />
          </div>
        </div> */}
        <div className="center">
          <Link className="link" to="/">
            OMO JABARI
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <a className="link" href="#contact">
              About
            </a>
          </div>
          <div className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </div>
          <div className="item">
            <a className="link" href="#categories">
              Categories
            </a>
          </div>
          <div className="icons">
            <FiSearch size={22} />
            <MdPersonOutline size={22} />
            <MdFavoriteBorder size={22} />
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <BsCart3 size={22} />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
