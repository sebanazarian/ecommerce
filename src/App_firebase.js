// import {ThemeContext} from './contexts/context';
// import {CartContext} from './contexts/context';
import React, {useEffect, useState} from 'react';
import { getFirestore } from './firebase';


const App = () => {
  const [productos, setProductos] = useState();
  useEffect(() => {
    
    // Referencia
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    const filtrarPorStock = itemCollection.where("stock", ">", 1);
        // const idItem = itemCollection.doc("nqYxwipNG16h9ScPXBvo");
    // Pedimos los datos
    filtrarPorStock.get().then((response) => {
      // console.log(response.data())
    const aux = response.docs.map(element => {
      return element.data();
    });

    // Guardamos los datos en estado
    setProductos(aux);

    });
  }, []);
  
  return <>
    <div>
      {productos ? 
      productos.map(element => {
        return <p key={element.name}>{element.name}</p>
      })
      :
      'cargando'}
    </div>
  </>
}

export default App;