import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from './cartSlice';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <h3>Your cart is empty.</h3>;
  }

  return (
    <div>
      <h3>Your Cart</h3>
      {items.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', margin: '1rem 0', display: 'flex', alignItems: 'center' }}>
          <img src={item.thumbnail} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px' }} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.price * item.count).toFixed(2)}</p>
            <p>Count: {item.count}</p>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
