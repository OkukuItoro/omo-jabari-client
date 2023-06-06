import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import { productTypes } from "../../constants";
import Loading from "../Loading/Loading";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    // `/products?populate=*&[filters][type][$eq]=${type}`
    "/products"
  );

  const typeData = data.filter((item) => item.type == type);

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
          <Loading width={220} height={400} content={[1, 2, 3, 4]} />
        ) : (
          typeData?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
