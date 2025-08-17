import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order_pizza, customer_choice } from './pizzaSlice'

function PizzaView() {
const pizzaBase = useSelector((state)=> state.pizza.pizzaBase);
const dispatch = useDispatch();
const [number, setNumber] = useState(1)

  return (
    <div>
       <h2> Number of pizza bases in the kitchen - {pizzaBase} </h2>
       <button onClick={() => dispatch(order_pizza())}>Order Pizza</button>
       <br /><br /> <br />
       <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
       <button onClick={() => dispatch(customer_choice(number))}>Customer Choice Order Pizza</button>
    </div>
  )
}

export default PizzaView