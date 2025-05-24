import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/CartSlice';
import './CartItem.css'

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="CartItem">
            <h4> {item.title} </h4>
            <div>
                <button onClick={() => dispatch(decrement(item.id))} disabled={item.count === 0}>-</button>
                <span> {item.count} </span>
                <button onClick={() => dispatch(increment(item.id))} disabled={item.count === 25}>+</button>
            </div>
        </div>
    )
}

export default CartItem;
