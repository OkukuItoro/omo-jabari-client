import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item item-sm">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item item-sm">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item item-lg">
          <h1>About</h1>
          <span>
            {" "}
            We have a track record for offering the best products for luxury,
            budget and affordable needs. Discover the perfect blend of style and
            comfort at our clothing store, offering fashionable and high-quality
            apparel for every occasion.
          </span>
        </div>
        <div className="item item-lg">
          <h1>Contact</h1>
          <span>
            Need assistance or have a question? Contact our friendly team for
            personalized support and exceptional customer service. Our dedicated
            staff is here to ensure your shopping experience is seamless and
            enjoyable. Get in touch today!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img className="logo" src="/img/logo.png" alt="logo" />
          <div className="copy-box">
            <span className="logo-text">OMO JABARI</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment gateways" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
