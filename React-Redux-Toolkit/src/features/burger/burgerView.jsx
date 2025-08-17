import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order_burger } from './burgerSlice';

function BurgerView() {
  const burgerBuns = useSelector((state)=>state.burger.burgerBuns);
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of burgerBuns in kitchen - {burgerBuns}</h2>
        <button onClick={() => dispatch(order_burger())}>Order Burger</button>
    </div>
  )
}

export default BurgerView