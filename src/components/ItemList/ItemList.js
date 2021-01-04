import React, { useContext } from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="small-container">
      <h2 className="title">Productos</h2>
      <div className="row">
        {products.length === 0 ? (
          <h2>Cargando ..</h2>
        ) : (
          <>
            {products.map((elemento, index) => {
              return <Item id={index} products={elemento} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default ItemList;
