import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartList = () => {
  const { cart, vaciarCarrito, deleteItem, precioTotal } =
    useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Aun no hay producto, volve al home</h2>
          <Link to="/">Inicio</Link>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <div key={producto.id}>
              <h3>{producto.name}</h3>
              <h3>${producto.price}</h3>
              <h3>{producto.cantidad}</h3>
              <h3>${producto.totalPrice}</h3>
              <button onClick={() => deleteItem(producto.id)}>X</button>
            </div>
          ))}
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <label> Total: ${precioTotal}</label>
        </>
      )}
    </>
  );
};
export default CartList;
