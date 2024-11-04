import Header from "./components/Header"
import Shop from "./components/Shop.jsx"
import { DUMMY_PRODUCTS } from './dummy-products.js'
import { useState } from "react"

function App() {

  const [cartCount, setCartCount ] = useState(0)

  const addToCart = () =>{
    setCartCount(cartCount + 1)
  }

  return (
    <>
    < Header cartCount = { cartCount } />
    < Shop addToCart = { addToCart }/>
     
    </>
  )
}

export default App
