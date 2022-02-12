import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React, { useState } from "react";
import { traerProductos } from "../api/products";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();
  
  useEffect(() => {
    traerProductos.then((res) => {
      const element = res.find((i) => i.id === Number(itemId));
      setItem(element);
    });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
}
