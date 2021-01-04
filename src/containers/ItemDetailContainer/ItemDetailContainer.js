import React, { useState, useEffect } from "react";
import getProductsFromDatabase from "../../lib/database";
import { getFirestore } from "../../firebase";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const { parametro } = useParams();

  const getProductFromFirebase = (parametro) => {
    console.log(parametro)
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const item = itemCollection.doc(parametro);

    item.get()
    .then((doc) => {
      if (!doc.exists) {
        setLoading(false);
        return;
      }
      setProduct({id:doc.id, ...doc.data()})
      setLoading(false);
    });
  };

  const getProductsFromJson = (parametro) => {
    getProductsFromDatabase().then((response) => {
      response.forEach((e) => {
        if (e.id == parametro) {
          setProduct(e);
          setLoading(false);
        }
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    // getProductsFromJson(parametro)
    getProductFromFirebase(parametro);
  }, [parametro]);

  return (
    <div className="mt-4 w-100 d-flex justify-content-center">
      {loading ? <h1>loading</h1> : product !== undefined? <ItemDetail product={product} /> : <h2>Producto inexistente</h2> }
    </div>
  );
};

export default ItemDetailContainer;
