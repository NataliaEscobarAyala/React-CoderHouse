import React, { useState } from "react";
const Counter = ({ stock, initial, onAdd }) => {
  const [number, setNumber] = useState(1);

  const add = () => {
    number < stock && setNumber(number + 1);
  };
  const subtract = () => {
    number > initial && setNumber(number - 1);
  };
  const addToCart = () => {
    onAdd(number);
  };

  return (
    <div>
      <div class="row 2 justify-content-center">
        <div class="col 2">Cantidad: {number}</div>
        <div class="row justify-content-center">
          <div class="col-4">
            <button class="btn btn-primary btn-sm" onClick={subtract}>
              -
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-primary btn-sm" onClick={add}>
              +
            </button>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col">
          <button
            class="btn btn-primary btn-sm"
            disabled={number === 0}
            onClick={addToCart}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
