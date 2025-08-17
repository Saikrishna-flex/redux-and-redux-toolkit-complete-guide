import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { orderBurger } from './redux';

function CustomerChoice() {
    const burgerBuns = useSelector((state) => state.burger.burgerBuns);
    const dispatch = useDispatch();
    const[number, setNumber] = useState('');

    const handleOrderBurger = () =>{
        dispatch(orderBurger(number));
        setNumber('')
    }
    
  return (
    <div>
        <h1>Number of Burger buns left in the kitchen are - {burgerBuns}</h1>
        <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter your number' />
        <button onClick={handleOrderBurger}>Order Burger</button>
    </div>
  )
}

export default CustomerChoice