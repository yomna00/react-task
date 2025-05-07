import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.count, 0)
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Shop</Link>
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">🛒 Cart ({cartCount})</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
