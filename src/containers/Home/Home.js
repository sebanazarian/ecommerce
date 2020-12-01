import React, { useState, useEffect, useContext } from "react";
import ItemList from "../../components/ItemList/ItemList";
import getProductsFromDatabase from "../../lib/database";
import {CartContext} from '../../context/CartContext'

import "./Home.css";


const Home = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const valorQueVieneDeCartContext = useContext(CartContext)
  useEffect(() => {
    getProductsFromDatabase().then((response) => {
      setProducts(response)
    });
  }, []);

 
  return (
    <div>
      <div className="contenedor">
        <h1 className="titulo">{mensaje}!</h1>
        <h1>{valorQueVieneDeCartContext.name}</h1>
      </div>
     
      <ItemList products={products}/>
      
    </div>
  );
};

export default Home;
