import React, { useEffect, useState } from "react";
import { traerProductos } from "../api/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    traerProductos.then((res) => {
      catId
        ? setItems(res.filter((cat) => cat.categoria === catId))
        : setItems(res);
    });
  }, [catId]);

  useEffect(() => {
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const product = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
