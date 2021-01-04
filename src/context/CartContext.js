import React,  { createContext,useContext ,useState } from 'react'
import { getFirestore } from "../firebase";


// const AppContext = createContext()
export const CartContext = React.createContext()

export const AppProvider = ({children}) =>{
  const [cart, setCart] = useState([])
  const [orderId, setOrderId] = useState()

  const handleCart = (newValue) =>{
    setCart((prevCart)=>[...prevCart,newValue])
  }


  const addProductSales = (venta) => {
    const db = getFirestore();
    db.collection("Sales").add(venta).then(({id}) =>{
      setOrderId(id)
    })
    console.log(orderId)
  };



  //Add items to Cart
  const addProductToCart = (product, quantity) => {
    const productInCart = cart.find((p) => p.product.id === product.id)
    if (productInCart === undefined) {
      setCart([...cart, { product, quantity }])
    } else {
      productInCart.quantity += quantity
      setCart([...cart])
    }
  }
  
  //Count Products
  const productsCount = () =>{
    return cart.reduce((acc,p) => (
      acc += p.quantity
    ),0)
  }

  

  //Delete Product from Cart
  const deleteProductToCart = (id) =>{
    console.log(id)
    cart.splice(
      cart.find(p=> p.id === id),1
    )
    setCart([...cart])
  }

  //Total $$
  const getGrandTotal = () =>{
    return cart.reduce((acc,p) => (
      acc += (p.product.price * p.quantity)
    ),0)
  }

  
  
 
  return( <CartContext.Provider value={{cart, handleCart,addProductToCart,productsCount,deleteProductToCart,getGrandTotal,addProductSales,orderId, setOrderId}}>
    {children}
  </CartContext.Provider>
  )
}