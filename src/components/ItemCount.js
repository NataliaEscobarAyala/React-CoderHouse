import React, { useState } from "react";

const Counter =({stock, initial, onAdd}) => {
  const [number, setNumber]= useState(1);

  const add = () => {
    number < stock && setNumber (number +1);
  };
  const subtract = () => {
    number > initial && setNumber (number - 1);
  };
  const addToCart = () => {
    onAdd(number);
  }


return(
  <div>
  <div> <button onClick={add}>+</button>
<p>{number}</p>
<button type="button" onClick={subtract}>-</button>
  </div>
  <div><button
    disabled={number===0}
    className={number=== 0 ? "disabled" : "add"}
    onClick={addToCart}> Agregar al carrito
    </button>
    </div>
  </div>)
}




export default Counter