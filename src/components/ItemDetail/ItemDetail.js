import React, { useState, useContext } from "react";
import { CartContext } from "..//../context/CartContext";
import ItemCounter from "../../components/ItemCounter/ItemCounter";

const ItemDetail = ({ product }) => {
  const [cantCompra, setCantCompra] = useState(1);
  const cartcxt = useContext(CartContext);
  
  const handleCantCompra = (counter) => {
    setCantCompra(counter);
  };

  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      <div>{product.name}</div>
      <br></br>
      <b> ${product.price}</b>
      <ItemCounter initialValue={1} minvalue={1} maxValue={10} onAdd={handleCantCompra} />
      <button
        className="btn btn-primary"
        onClick={() => {
          cartcxt.addProductToCart(product,cantCompra);
        }}
      >
        Añadir al Carrito ({cantCompra})
      </button>
    </div>
  );
};
export default ItemDetail;
