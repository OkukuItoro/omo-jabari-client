import React from "react";

const CategoryHome = ({ id }) => {
  return (
    <div>
      {id == 1 && (
        <>
          <h1>Men's Collections</h1>
          <img
            className="catImg"
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1"
            alt="category image"
          />
        </>
      )}
      {id == 2 && (
        <>
          <h1>Women's Collections</h1>
          <img
            className="catImg"
            src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&w=1200&dpr=1"
            alt="category image"
          />
        </>
      )}
    </div>
  );
};

export default CategoryHome;
