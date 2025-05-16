import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addToLocalStorage,
  getStoredCart,
  removeFromLocalStorage,
} from "../localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      //   console.log(storedCart, bottles);
      const savedCart = [];

      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    // console.log("Bottle is going to be added");
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLocalStorage(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual remove

    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);

    // remove from local storage
    removeFromLocalStorage(id);
  };

  return (
    <div>
      <h3>Bottles Available : {bottles.length}</h3>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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
