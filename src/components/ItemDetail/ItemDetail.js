import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "..//../context/CartContext";
import ItemCounter from "../../components/ItemCounter/ItemCounter";
import "../../App.css";

const ItemDetail = ({ product }) => {
  const [cantCompra, setCantCompra] = useState(1);
  const cartcxt = useContext(CartContext);

  const handleCantCompra = (counter) => {
    setCantCompra(counter);
  };

  return (
    <div className="small-container">
      <h4>{product.name}</h4>
      <div className="row">
        <img src={product.image} alt="" width="125px" height="125px" />
        <div className="col-3">
          <ItemCounter
            initialValue={1}
            minvalue={1}
            maxValue={10}
            onAdd={handleCantCompra}
          />
          <p>Precio: ${product.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              cartcxt.addProductToCart(product, cantCompra);
            }}
          >
            Añadir al Carrito ({cantCompra})
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
