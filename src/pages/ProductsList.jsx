import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from './cartSlice';
import { useDispatch } from 'react-redux';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{height: '200px', objectFit: 'cover'}}/>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
              <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              <br /><br />
              <button className="btn btn-primary btn-sm me-2" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
