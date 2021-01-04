import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <div className="col-4">
      <Link to={"/detalle/" + products.id}>
        <h4>{products.name}</h4>
        <img src={products.image} />
        <p>${products.price}</p>
      </Link>
    </div>
  );
};
export default Item;
