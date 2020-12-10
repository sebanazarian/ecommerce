import React, {useContext} from "react";
import Item from "../Item/Item";

const ItemList = ({products}) => {

  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
     {products.length === 0 
     ?(
        <div>Cargando ..</div>
     ):(
        <div>
          {products.map((elemento, index) =>{
            return<Item id={index} products={elemento} />
          })}
        </div>
      )}
     </div>
  )
  

}
export default ItemList;
