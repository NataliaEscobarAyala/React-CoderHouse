import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { getItems, updateItem, addItem } from "../api/collectionService";
import "./CartList.css";
import Swal from "sweetalert2";

const CartList = () => {
  const { cart, vaciarCarrito, deleteItem, precioTotal } =
    useContext(CartContext);
  let divStyles = {
    "max-width": "540px",
  };
  const ordenes = () => {
    addItem("orders", { cart })
      .then(async (document) => {
        Swal.fire(
          "",
          `Su compra se registro correctamente, Nro de Orden: ${document.id}`,
          "success"
        );
        const items = await getItems("items");
        for (const c of cart) {
          const item = items.find((i) => i.id === c.id);
          item.stock = item.stock - c.cantidad;
          updateItem("items", item);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al registrar la ordern, intente nuevamente!",
          footer: "",
        });
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
              <div class="card mb-3" styles={divStyles}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={producto.img}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Producto {producto.name}</h5>
                      <p class="card-text">
                        <h3>Precio: ${producto.price}</h3>
                        <h3>Cantidad {producto.cantidad}</h3>
                        <h3>Total: ${producto.totalPrice}</h3>
                      </p>

                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => deleteItem(producto.id)}
                      >
                        Eliminar producto
                      </button>
                      <p className="boton-vaciarCarrito-PrecioTotal">

                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={vaciarCarrito}
                        >
                          Vaciar carrito
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={ordenes}
                        >
                          Comprar
                        </button>
                        <label> Total: ${precioTotal}</label>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            {/* <button
              type="button"
              class="btn btn-primary"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
            <label> Total: ${precioTotal}</label>
            <button type="button" class="btn btn-primary" onClick={ordenes}>
              Comprar
            </button> */}
          </>
        )}
      </>
    </div>
  );
};
export default CartList;
