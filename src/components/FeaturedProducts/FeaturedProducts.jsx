import React, { useState, useEffect } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { productTypes } from "../../constants";
import Loading from "../Loading/Loading";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
    // "/products"
  );

  // const typeData = data?.filter((item) => item.type == type);

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
    <div className="featured-products">
      <div className="top">
        <h1>{type} products</h1>
        <p>{productTypes[`${type}`]}</p>
      </div>
      <div className="bottom">
        {error ? (
          "Something went wrong!"
        ) : loading ? (
          <Loading
            width={240}
            height={400}
            content={
              viewportWidth < 990
                ? [1, 2]
                : viewportWidth < 1250
                ? [1, 2, 3]
                : [1, 2, 3, 4]
            }
          />
        ) : viewportWidth < 990 ? (
          data?.map((item, i) => {
            if (i == 2) return "";
            else if (i == 3) return "";
            else return <Card item={item} key={item.id} />;
          })
        ) : viewportWidth < 1250 ? (
          data?.map((item, i) => {
            if (i == 3) return "";
            else return <Card item={item} key={item.id} />;
          })
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
