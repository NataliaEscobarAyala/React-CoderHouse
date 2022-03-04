import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import React, { useState } from "react";
// import { traerProductos } from "../api/products";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    // traerProductos.then((res) => {
    //   const element = res.find((i) => i.id === Number(itemId));
    //   setItem(element);
    // });
    const itemRef = doc(db, "items", itemId);
    getDoc(itemRef)
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
