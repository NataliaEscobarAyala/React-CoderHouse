import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-container">
      <div class="card">
        <img src={item.img} alt={item.name} width="200px" />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">${item.price}</p>
        </div>
        <Link to={`/producto/${item.id}`} type="button" class="btn btn-primary">
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
