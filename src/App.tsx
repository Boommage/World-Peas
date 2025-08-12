import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import { type CartItem } from "./utils/Food"
import { Outlet } from "react-router-dom"

function App() {

  const [cart, setCart] = useState<CartItem[]>(() => {
    const userCart = localStorage.getItem("user")
    return userCart ? JSON.parse(userCart) : []
  })

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(cart))
  }, [cart])

  function setCartHelper(item: CartItem) {
    setCart(prev => [...prev, item]);
  }

  function changeLbs(target: CartItem, newLbs: number) {
    setCart(prev => 
      prev.map(item => 
        item.food.name === target.food.name
        ? {...item, lbs: newLbs}
        : item
      )
    )
  }

  function removeItem(target: CartItem) {
    setCart(prev => 
      prev.filter(item => item.food.name !== target.food.name)
    )
  }

  return (
      <Layout cartSize={cart.length}>
        <Outlet context={{ cart, setCartHelper, changeLbs, removeItem }}/>
      </Layout>
  )
}

export default App
