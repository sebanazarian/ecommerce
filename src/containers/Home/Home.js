import React, { useState, useEffect, useContext } from "react";
import CategoryList from "../../components/CategoryList/CategoryList";
import ItemList from "../../components/ItemList/ItemList";
// import getProductsFromDatabase from "../../lib/database";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";

import "./Home.css";

const Home = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { parametro } = useParams();

  const getProductsFromFirebase = () => {
    // Referencia
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    const filtrarPorStock = itemCollection.where("stock", ">", 1);
    // Pedimos los datos
    filtrarPorStock.get().then((response, reject) => {
      if (response.size === 0) reject("no hay registros");
      const aux = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(aux)
      setProducts(aux);
    });
  };

  const getProductsByCategory = (parametro) => {
    // Referencia
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    // const filtrarPorStock = itemCollection.where("stock", ">", 1);

    const filtrarPorCat = itemCollection.where(
      "categoryId",
      "==",
      parseInt(parametro)
    );
    // Pedimos los datos
    filtrarPorCat.get().then((response, reject) => {
      const aux = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(aux);
      setProducts(aux);
    });
  };

  const getCategoriesFromFirebase = () => {
    // Referencia
    const db = getFirestore();
    const categoriesCollection = db.collection("categorias");
    // Pedimos los datos
    categoriesCollection.get().then((response, reject) => {
      if (response.size === 0) reject("no hay registros");
      // const aux = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const aux = response.docs.map((element) => {
        return element.data();
      });
      setCategories(aux);
    });
  };

  useEffect(() => {
    if (parametro === undefined || parametro == null || parametro == "") {
      getProductsFromFirebase();
    } else {
      getProductsByCategory(parametro);
    }
    getCategoriesFromFirebase();
  }, [parametro]);

  return (
    <div>
      <CategoryList categories={categories} />
      <ItemList products={products} />
    </div>
  );
};

export default Home;
