import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './components/CartItem/CartItem';
import AddProduct from './components/AddProduct/AddProduct';
import './App.css'

function App() {
  const cartItems = useSelector(state => state.cart);

  return (
      <div className="App">
        <h1>Корзина</h1>
          <AddProduct />
          <div className="ProductGrid">
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
          </div>
      </div>
  );
}

export default App;
