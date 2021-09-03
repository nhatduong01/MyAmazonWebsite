import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="Home_Product">
      <div className="Product_info">
        <p>{title}</p>
        <p className="Product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button> Add to basket</button>
    </div>
  );
}

export default Product;
