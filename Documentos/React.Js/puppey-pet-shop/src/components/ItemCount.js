import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="ItemListContainer">
      <label>{counter}</label>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          if (counter < stock) {
            setCounter(counter + 1);
          }
        }}
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          if (counter > 1) {
            setCounter(counter - 1);
          }
        }}
      >
        -
      </button>
      <button type="button" class="btn btn-success" onClick={onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;
