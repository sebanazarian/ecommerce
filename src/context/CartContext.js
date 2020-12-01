import React from 'react'
import { useState } from 'react';

const CartContext = React.createContext()

export { CartContext };

export const AppProvider = ({children}) =>{
  const [name, setName] = useState('Fabricio')

  return <AppContext.Provide>
    {children}
  </AppContext.Provide>
}