import React, { useEffect, useState } from "react";
import { getItems } from "../api/collectionService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    getItems("items").then((res) => {
      catId
        ? setItems(res.filter((cat) => cat.categoria === catId))
        : setItems(res);
    });
  }, [catId]);

  useEffect(() => {
    getItems("items")
  }, []);

  return (
    <div className="ItemListContainer">
      <ItemList items={items} />
    </div>
  );
};


export default ItemListContainer;
