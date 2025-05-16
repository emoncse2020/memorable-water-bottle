const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveToLocalStorage = (cart) => {
  const cartStrigifired = JSON.stringify(cart);
  localStorage.setItem("cart", cartStrigifired);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  saveToLocalStorage(cart);
};

const removeFromLocalStorage = (id) => {
  const cart = getStoredCart();

  //   removing every ids
  const remaining = cart.filter((idx) => idx !== id);
  saveToLocalStorage(remaining);
};

export { addToLocalStorage, getStoredCart, removeFromLocalStorage };
