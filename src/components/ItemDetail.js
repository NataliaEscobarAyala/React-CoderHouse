import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setMostrarBoton(true);
    addToCart(cantidad, item);
  };
  return (
    <div className="item-container">
      <div class="card">
        <img src={item.img} alt={item.name} width="200px" />
      </div>

      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">${item.price}</p>
        {mostrarBoton ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}
export default ItemDetail;
