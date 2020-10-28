import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Just Buy It
            </Link>
          </div>
          <div>
            <Link to="/cart" className="header-icon">
              <i className="fa fa-shopping-cart fa-2x">
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
              </i>
              Cart
              
            </Link>
            <Link to="/signin" className="header-icon">
            <i className="fa fa-user fa-2x"></i>
              Sign In
            </Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;