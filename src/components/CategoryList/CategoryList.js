import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      {categories.length === 0 ? (
        <div>Cargando ..</div>
      ) : (
        <div>
          {categories.map((elemento, index) => (
            <Link to={"/categories/" + elemento.id}>
              <div key={index}>
                <button>{elemento.name}</button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default CategoryList;
