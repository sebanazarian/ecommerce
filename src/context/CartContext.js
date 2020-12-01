import React,  { useState } from 'react'

export const CartContext = React.createContext()

export const AppProvider = ({children}) =>{
  const [name, setName] = useState('Fabricio')
  const [product, setProduct] = useState('Fabricio')
  const [cant, setCant] = useState('Fabricio')

  return( <CartContext.Provider value={{name}}>
    {children}
  </CartContext.Provider>
  )
}