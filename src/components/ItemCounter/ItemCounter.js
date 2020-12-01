import React,{useState} from 'react';


const ItemCounter = ({initialValue, maxValue, minvalue, onAdd}) => { 
  const [contador, setContador] = useState(initialValue);
  
  const sumarNumero = () =>{
    if (contador < maxValue){
      setContador(contador+1)  
      onAdd(contador+1)
    }
  }

  const restarNumero = () =>{
    if (contador > minvalue){
      setContador(contador-1)
      onAdd(contador-1)  
    }
    
  }

  const handleAddToCart=()=>{
    onAdd(contador);
  }
  return (
    <div>
      <h1>Item Counter</h1>
      <h2>{contador}</h2> 
      <button className="btn btn-primary" onClick={sumarNumero}>+</button>
      <button className="btn btn-primary" onClick={restarNumero}>-</button>
 

    </div>
  )
}

export default ItemCounter;