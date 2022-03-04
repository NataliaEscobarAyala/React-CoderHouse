import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import {
  addDoc,
  doc,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const CartList = () => {
  const { cart, vaciarCarrito, deleteItem, precioTotal } =
    useContext(CartContext);

  const ordenes = () => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, { cart })
      .then(async (document) => {

        alert(`Su compra se realizo correctamente ${document.id}`);
        const items = await getItems();

        for (const c of cart) {
          const item = items.find((i) => i.id == c.id);
          item.stock = item.stock - c.cantidad;
          const itemRef = doc(db, "items", c.id);
          updateDoc(itemRef, item)
            .then((res) => {
              console.log("Actualizado ");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getItems = async () => {
    const itemsCollection = collection(db, "items");
    return await getDocs(itemsCollection)
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
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
