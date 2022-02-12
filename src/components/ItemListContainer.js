import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import { traerProductos } from "../api/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
const{catId}= useParams()
  useEffect(() => {
    traerProductos.then((res) => {
      
      catId ? setItems(res.filter(cat => cat.categoria === catId))
      :setItems(res);
    });
  },[catId]);

  return (
    
    <div className="ItemListContainer">
      <ItemList items={items} />
      <ItemCount
        stock={5}
        initial={1}
        onAdd={(counter) => console.log(counter)}
      />
      
      
    </div>
  );
};
export default ItemListContainer;
