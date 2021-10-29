import React from "react";
// import PopUp from "./Modal";
import Modal from "react-modal"
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { colors } from "@material-ui/core";
import { lightBlue, red } from "@material-ui/core/colors";
function Product({id, title, image, price, rating, desc1, desc2, desc3}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const [popUpIsOpen, setPopUp] = useState(false);
  const customStyle = {
    overlay: {
      zIndex: 101,
      backgroundColor: 'rgba(103, 128, 159, 0.75)',
      color: red,
    }
  };
  const showDetails= () => {
    setPopUp(true);
    // this is to disable scrolling while viewing a popup, but eh it's prolly not needed
    // document.body.style.overflow = "hidden";
    // document.body.style.height = "100%";
  }
  const hideDetails= () => {
    setPopUp(false);
    // document.body.style.overflow = "auto";
    // document.body.style.height = "auto";
  }
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
      <img src={image} onClick={showDetails}/>
      <Modal className="Pop_Up" closeTimeoutMS={500} style={customStyle} isOpen={popUpIsOpen}>
        <div>
          <div className="Details_Info">
            <h2>Product: {title}</h2>
            <p>Description 1: {desc1}</p>
            <p>Description 2: {desc2}</p>
            <p>Description 3: {desc3}</p>
          </div>
          <button onClick={hideDetails}>Close</button>            
        </div>
      </Modal>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
