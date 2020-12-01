import React, { useState, useEffect } from "react";
//import getOneProduct from "../../lib/databaseoneproduct";
import getProductsFromDatabase from "../../lib/database";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { parametro } = useParams();

  useEffect(() => {
    console.log(parametro);
    setLoading(true);
    getProductsFromDatabase().then((response) => {
      response.forEach((e) => {
        console.log(e.id)
        if (e.id == parametro) {
          setProduct(e);
          setLoading(false);
        }
        
      });
    });
  }, [parametro]);

  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      {loading ? <h1>loading</h1> : <ItemDetail product={product} />}
      
      
    </div>
  );
};

export default ItemDetailContainer;
