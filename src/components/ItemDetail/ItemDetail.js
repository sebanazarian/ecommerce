import React, { useState } from "react";
import ItemCounter from "../../components/ItemCounter/ItemCounter";

const ItemDetail = ({product}) => {
  const [cantCompra, setCantCompra] = useState()
  const compra = (counter) => {
    setCantCompra(counter);
  };

  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      <div>{product.name}</div><br></br>
      <b> ${product.price}</b>
      <ItemCounter
        initialValue={0}
        minvalue={0}
        maxValue={10}
        onAdd={compra}
      />
       <button className="btn btn-primary">Comprar {cantCompra}</button>
    </div>
  );
};
export default ItemDetail;
