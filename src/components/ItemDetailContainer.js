import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../api/collectionService";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    getItem("items",itemId)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
}
