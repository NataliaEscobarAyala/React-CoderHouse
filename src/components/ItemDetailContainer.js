import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React, { useState } from "react";
import { traerProductos } from "./api/products";

export default function ItemDetailContainer({id}) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    traerProductos.then((res) => {
      const element = res.find((i) => i.id === id);
      setItem(element);
    });
  },[]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
}
