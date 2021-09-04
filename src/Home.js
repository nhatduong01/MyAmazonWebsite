import React from "react";
import "./Home.css";
import Product from "./product";
function Home() {
  return (
    <div className="Home">
      <div className="Home_Container">
        <img
          className="Home_Image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        />
        <div className="Home_Row">
          <Product
            id="1"
            title="Apple iPhone 11 Pro Max, 256GB, Midnight Green - Unlocked (RenewedPremium)"
            price={1149.0}
            image="https://m.media-amazon.com/images/I/51bvOBgFHGS._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Ho Thao Nguyen, Ho Chi Minh City, VietNam"
            price={999999}
            image="https://i.imgur.com/xP8swdV.jpg"
            rating={5}
          />
        </div>
        <div className="Home_Row">
          <Product
            id="3"
            title="Dragon Ball Super Limit Breaker 12 Action Figure"
            price={15.99}
            image="https://m.media-amazon.com/images/I/61i6C4-aDnL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Fjallraven, Kanken Classic Backpack for Everyday, Graphite"
            price={85.2}
            image="https://m.media-amazon.com/images/I/71gjJZ4Df2L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Amazon Basics 21-Inch, Black, 21-inch"
            price={71.03}
            image="https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="Home_Row">
          <Product
            id="6"
            title="SAMSUNG 75-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN75TU8000FXZA, 2020 Model)"
            price={1726.9}
            image="https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
