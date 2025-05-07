import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLanguage }from './Language';

function Navbar() {
  const cartCount = useSelector(state =>
    state.cart.items.reduce((total, item) => total + item.count, 0)
  );

  const { language, setLanguage } = useLanguage();

  const handleLangChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">Shop</Link>
        
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒 Cart ({cartCount})</Link>
          </li>
          <li className="nav-item">
            <select
              className="form-select"
              value={language}
              onChange={handleLangChange}
              style={{ width: "100px" }}
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
