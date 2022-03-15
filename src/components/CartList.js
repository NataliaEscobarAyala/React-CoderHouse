import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { getItems, updateItem, addItem } from "../api/collectionService";

const CartList = () => {
  const { cart, vaciarCarrito, deleteItem, precioTotal } =
    useContext(CartContext);

  const ordenes = () => {
    addItem("orders", { cart })
      .then(async (document) => {
        alert(`Su compra se realizo correctamente ${document.id}`);
        const items = await getItems("items");
        for (const c of cart) {
          const item = items.find((i) => i.id === c.id);
          item.stock = item.stock - c.cantidad;
          updateItem("items", item);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <button onClick={ordenes}>Comprar</button>
        </>
      )}
    </>
  );
};
export default CartList;
