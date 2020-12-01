import logo from "./logo.svg";
import "./App.css";
import { CartContext } from "./context/CartContext";
import Home from "./containers/Home/Home";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState('asd')
  return (
    <CartContext.Provider value={{cart}}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home mensaje={"Bienvenido"} />
          </Route>
          <Route exact path="/detalle/:parametro">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
