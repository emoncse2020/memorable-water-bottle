import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    console.log("Bottle is going to be added");
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div>
      <h3>Bottles Available : {bottles.length}</h3>
      <h4>Cart : {cart.length}</h4>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handleAddToCart={handleAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
