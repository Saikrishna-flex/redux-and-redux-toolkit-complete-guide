import React from 'react'
import { connect } from 'react-redux'
import { orderPizza } from './redux'

function PizzaBox(props) {
    console.log(props);
  return (
    <div>
        <h1>Number of pizzaBase left in the kitchen are - {props.pizzaBase}</h1>
        <button onClick={props.orderPizza}>Order Pizza</button>
    </div>
  )
}

const mapStateToProps =(state)=>{
    return{
        pizzaBase : state.pizza.pizzaBase
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        orderPizza : ()=> dispatch(orderPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox)