import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './components/cart/Cart';
import AddProduct from './components/add_product/AddProduct';
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
