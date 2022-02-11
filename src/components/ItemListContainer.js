import ItemCount from "./ItemCount";
import React, { useEffect, useState } from "react";
import { traerProductos } from "./api/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    traerProductos.then((res) => {
      setItems(res);
    });
  });

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
