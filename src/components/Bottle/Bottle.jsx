import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  //   console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="bottle-container">
      <h2>Botte Name : {name}</h2>
      <img src={img} alt="" />
      <p>Price : ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
