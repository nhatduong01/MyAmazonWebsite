import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_img"
          src="https://static05.cminds.com/wp-content/uploads/Magento_abandonedcarts_rectangle_2_Illustrative_Banner_Blog.jpg"
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
