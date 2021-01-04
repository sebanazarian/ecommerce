import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cartcxt = useContext(CartContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [valid, setValid] = useState();

  const handleDel = (e) => {
    cartcxt.deleteProductToCart(e.product.id);
  };

  const handleBuy = (venta) => {
    if (email === emailConfirmation) {
      console.log(venta);
      cartcxt.addProductSales(venta);
    } else {
      alert("Los email no coinciden");
    }
  };

  useEffect(() => {
    cartcxt.setOrderId();
  }, []);

  useEffect(() => {
    setValid(
      cartcxt.cart.length > 0 &&
    firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        emailConfirmation.trim() !== ""
    );
  }, [firstName,cartcxt.cart, email, emailConfirmation]);

  const handleChange = () => {};
  return (
    <div className="small-container">
      <h2 className="title">Detalle de su Compra</h2>
      <div className="row">
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
              <button
                className="btnExplorar"
                onClick={() => handleDel(elemento)}
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <div>
            <h2>No agrego Productos a su carrito</h2>
            <Link to="/" className="btnExplorar">
              {" "}
              Volver a la Tienda
            </Link>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            placeholder="Nombre"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            type="text"
            placeholder="Confirmar Correo electrónico"
            value={emailConfirmation}
            onChange={(e) => setEmailConfirmation(e.target.value)}
          />
          <br></br>
          <button
            className="btnExplorar"
            disabled={!valid}
            onClick={() => {
              let venta = {
                buyer: { name: firstName, apellido: lastName, email: email },
                items: cartcxt.cart,
                total: cartcxt.getGrandTotal(),
              };
              handleBuy(venta);
            }}
          >
            Comprar
          </button>
          <h4>Total de Productos: {cartcxt.productsCount()}</h4>
          <h4>Precio Total: {cartcxt.getGrandTotal()}</h4>
          {cartcxt.orderId !== undefined && (
            <h3>Su numero de Pedido es {cartcxt.orderId}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
