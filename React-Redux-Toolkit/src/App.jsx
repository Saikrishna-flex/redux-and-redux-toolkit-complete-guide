import './App.css'
import BurgerView from './features/burger/burgerView'
import PizzaView from './features/pizza/pizzaView'
import ProductView from './features/product/ProductView'

function App() {
  return (
    <>
      <PizzaView/>
      <br />
      <BurgerView/>
      <br />
      <ProductView/>
    </>
  )
}

export default App
