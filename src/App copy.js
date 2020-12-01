import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home'
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
       <Home mensaje="Bienvenido"/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;
