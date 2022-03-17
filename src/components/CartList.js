import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { getItems, updateItem, addItem } from "../api/collectionService";
import "./CartList.css";

const CartList = () => {
  const { cart, vaciarCarrito, deleteItem, precioTotal } =
    useContext(CartContext);
  let divStyles = {
    "max-width": "540px",
  };
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
    <div className="">
      <>
        {cart.length === 0 ? (
          <>
            <h2>Aun no hay producto, volve al home</h2>
            <Link to="/">Inicio</Link>
          </>
        ) : (
          <>
            {cart.map((producto) => (
              <div class="card mb-3" style={divStyles}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={producto.img}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  {/* <div class="col-md-8"> */}
                    <div class="card-body">
                      <h5 class="card-title">{producto.name}</h5>
                      <h3>${producto.price}</h3>
                      <h3>{producto.cantidad}</h3>
                      <h3>${producto.totalPrice}</h3>
                      <button onClick={() => deleteItem(producto.id)}>X</button>
                    </div>
                  </div>
                </div>
              // </div>
            ))}
             {/* {cart.map((producto) => (
              <div key={producto.id}>
              <img  src={producto.img} />

                <h3>{producto.name}</h3>
                <h3>${producto.price}</h3>
                <h3>{producto.cantidad}</h3>
                <h3>${producto.totalPrice}</h3>
                <button onClick={() => deleteItem(producto.id)}>X</button>
              </div>
            ))} */}
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
            <label> Total: ${precioTotal}</label>
            <button onClick={ordenes}>Comprar</button> 
          </>
        )}
      </>
    </div>
  );
};
export default CartList;
