import React, { useState } from 'react';
import PrdList from './PrdList';
import Cart from './Cart';
import './App.css';


const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Simple React E-Commerce Store</h1>
      <PrdList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
    </div>
  );
};

export default App;
