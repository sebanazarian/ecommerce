import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      <Link to={"/detalle/" + products.id}>
        <div>{products.name}</div>
        <br></br>
        <b> ${products.price}</b>
      </Link>
    </div>
  );
};
export default Item;
