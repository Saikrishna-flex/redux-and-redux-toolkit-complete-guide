import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './redux/burger/BurgerActions';

function BurgerBox() {
    const burgerBuns = useSelector(state => state.burger.burgerBuns);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of Burger buns left in the kitchen are - {burgerBuns}</h1>
        <button onClick={() => dispatch(orderBurger())}>Order Burger</button>
    </div>
  )
}

export default BurgerBox