import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setMostrarBoton(true);
    addToCart(cantidad, item);
  };
  return (
    <div>
      <div class="card text-center mb-3" styles="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={item.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">
                Precio: ${item.price}
              </p>
                {mostrarBoton ? (
                  <Link to="/cart">Ir al carrito</Link>
                ) : (
                  <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
