import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="small-container">
      <h2 className="title">Categorias</h2>
      <div className="row">
        {categories.length === 0 ? (
          <h2>Cargando ..</h2>
        ) : (
          <>
            {categories.map((elemento, index) => (
              <Link to={"/categories/" + elemento.id}>
                <div className="col-4" key={index}>
                  <button className="btnExplorar">{elemento.name}</button>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default CategoryList;
