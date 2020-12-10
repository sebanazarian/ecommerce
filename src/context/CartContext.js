import React,  { createContext,useContext ,useState } from 'react'

// const AppContext = createContext()
export const CartContext = React.createContext()

export const AppProvider = ({children}) =>{
  const [cart, setCart] = useState([])

  const handleCart = (newValue) =>{
    setCart((prevCart)=>[...prevCart,newValue])
  }

  const addProductToCart = (product, quantity) => {
    const productInCart = cart.find((p) => p.product.id === product.id)
    console.log(productInCart)
    if (productInCart === undefined) {
      setCart([...cart, { product, quantity }])
    } else {
      productInCart.quantity += quantity
      setCart([...cart])
    }
  }
  
  
  const productsCount = () =>{
    // var sum = 0;
    // cart.forEach(element => sum += element.quantity);
    // return sum
    //otra manera de hacer foreach,map, for()
    return cart.reduce((acc,p) => (
      acc += p.quantity
    ),0)
  }

  

  //Eliminar
  const deleteProductToCart = (id) =>{
    cart.splice(
      cart.findIndex(p=> p.id === id),1
    )
    setCart([...cart])
  }

  //Importe Total
  const getGrandTotal = () =>{
    return cart.reduce((acc,p) => (
      acc += (p.product.price * p.quantity)
    ),0)
  }

  
  
 
  return( <CartContext.Provider value={{cart, handleCart,addProductToCart,productsCount,deleteProductToCart,getGrandTotal}}>
    {children}
  </CartContext.Provider>
  )
}