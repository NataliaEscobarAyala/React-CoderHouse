import React, { useState } from "react";

function ItemListContainer({ stock, initial }) {
  const [counter, setCounter] = useState(initial);

  return (
    <div className="ItemListContainer">
      <label>{counter}</label>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          if (counter !== stock) {
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
          if (counter !== 0) {
            setCounter(counter - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}
export default ItemListContainer;
