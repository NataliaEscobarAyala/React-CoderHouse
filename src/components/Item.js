import React from "react";
import ItemDetailContainer from './ItemDetailContainer'
const Item = ({ item }) => {
  return (
    <div className="item-container">
      <div class="card">
        <img src={item.img} alt={item.name} width="200px"/>
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">
          ${item.price}
          </p>
          <ItemDetailContainer id={item.id}/>
        </div>
      </div>
    </div>
  );
};

export default Item;
