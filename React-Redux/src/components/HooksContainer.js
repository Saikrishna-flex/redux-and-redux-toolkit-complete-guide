import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderPizza } from './redux'

function HooksContainer() {
  const pizzaBase=  useSelector((state) => state.pizza.pizzaBase)
  const dispatch = useDispatch()
    
  return (
    <div>
        <h1>Number of pizzaBase left in the kitchen are - {pizzaBase}</h1>
        <button onClick={() => dispatch(orderPizza())}>Order Pizza</button>
    </div>
  )
}

export default HooksContainer