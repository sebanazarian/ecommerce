import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cartcxt = useContext(CartContext);

  const handleDel = (e) => {
    console.log(e);
    cartcxt.deleteProductToCart(e.product.id);
  };

  const handleBuy = (venta) => {
    cartcxt.addProductSales(venta);
  };

  const handleChange = () => {};
  return (
    <div id="Cart">
      <div>
        {cartcxt.cart.length > 0 ? (
          cartcxt.cart.map((elemento, index) => (
            <div>
              <h4>Producto:{elemento.product.name}</h4>
              Precio:<b> ${elemento.product.price}</b>
              <br></br>
              Cantidad:<b> {elemento.quantity}</b>
              <br></br>
              Total Por Producto:
              <b> {elemento.quantity * elemento.product.price}</b>
              <br></br>
              <button onClick={() => handleDel(elemento)}>Eliminar</button>
            </div>
          ))
        ) : (
          <div>
            <h2>No agrego Productos a su carrito</h2>
            <Link to="/">Volver a la Tienda</Link>
          </div>
        )}
      </div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Nombre y Apellido"
      />
      <input onChange={handleChange} type="text" placeholder="Email" />
      <button
        onClick={() => {
          let venta = {
            buyer: { name: "Sebastian", email: "sebanaza@hotmail.com" },
            items: cartcxt.cart,
            total: cartcxt.getGrandTotal(),
          };
          handleBuy(venta);
        }}
      >
        Comprar
      </button>
      <div>Total de Productos: {cartcxt.productsCount()}</div>
      <div>Precio Total: {cartcxt.getGrandTotal()}</div>
      

      {cartcxt.orderId !== undefined && (<div>Su numero de Pedido es {cartcxt.orderId}</div>)}
    </div>
  );
};

export default Cart;
