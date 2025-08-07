import { useEffect, useState } from "react"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Shop from "./components/Shop"
import { type CartItem } from "./utils/Food"
import Cart from "./components/Cart"

function App() {

  const [tab, setTab] = useState("")
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

  //changes a CartItems lbs
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

  function changeTab(x: string) {
    setTab(x)
  }
  
  return (
    <>
      <Layout changeTab={changeTab} cartSize={cart.length}>
        {(!tab && <Home setTab={setTab}/>)}
        {(tab === "shop" && <Shop 
          setCart={setCartHelper} 
          cartContent={cart} 
          changeLbs={changeLbs}
        />)}
        {(tab === "cart" && <Cart 
          cartContent={cart} 
          changeLbs={changeLbs}
          removeItem={removeItem}
        />)}
      </Layout>
    </>
  )
}

export default App
