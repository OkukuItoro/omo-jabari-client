import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <span className="text-cta">BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGoogle />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Contact;
