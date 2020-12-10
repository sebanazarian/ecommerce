import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/CartContext";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Home from "./containers/Home/Home";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {
 
  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home mensaje={"Bienvenido"} />
          </Route>
          <Route exact path="/detalle/:parametro">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categories/:parametro">
            <Home mensaje={"Bienvenido"}  />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
