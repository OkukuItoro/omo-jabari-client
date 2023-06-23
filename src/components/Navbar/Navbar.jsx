import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Navbar.scss";
import { MdPersonOutline, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [viewportWidth, setViewportWidth] = useState(0);

  function handleResize() {
    setViewportWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {viewportWidth > 990 ? (
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
        ) : !showMenu ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginRight: "4rem" }}
              className="cart-icon"
              onClick={() => setOpen(!open)}
            >
              <BsCart3 size={20} />
              <span>{products.length}</span>
            </div>
            <RiMenu2Fill
              style={{ cursor: "pointer" }}
              size={20}
              onClick={() => setShowMenu(true)}
            />
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ marginRight: "4rem" }}
              className="cart-icon"
              onClick={() => setOpen(!open)}
            >
              <BsCart3 size={20} />
              <span>{products.length}</span>
            </div>
            <AiOutlineClose
              style={{ cursor: "pointer" }}
              size={20}
              onClick={() => setShowMenu(false)}
            />
          </div>
        )}
      </div>
      {viewportWidth < 990
        ? showMenu && (
            <div className="alt-menu">
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
            </div>
          )
        : ""}
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
