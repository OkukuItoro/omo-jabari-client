import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories" id="categories">
      <div className="first-col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
            alt="pants category"
          />
          <Link className="link" to="/products/1">
            <button>Pants</button>
          </Link>
        </div>
        <div className="row special-row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
            alt="women category"
          />
          <Link className="link" to="/products/2">
            <button>Women</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
            alt="new season category"
          />
          <Link className="link" to="/products/1">
            <button>New Season</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
                alt="men category"
              />
              <Link className="link" to="/products/1">
                <button>Men</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
                alt="accessories category"
              />
              <Link className="link" to="/products/1">
                <button>Accessories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=800&dpr=1"
            alt="shoes category"
          />
          <Link className="link" to="/products/1">
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
