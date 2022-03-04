import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
const AddItemContainer = () => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoriaChange = (event) => setCategoria(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleStockChange = (event) => setStock(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (![name, categoria, price].some((field) => field === "")) {
      const itemCollection = collection(db, "items");
      const newItem = {
        name: name,
        categoria: categoria,
        price: price,
        stock: stock,
      };
      addDoc(itemCollection, newItem)
        .then((doc) => {
          console.log("Se guardo correctamente", doc.id);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Hay valores vacios");
    }
  };

 
  const setImage = () => {};

  return (
    <div className="form-product">
      <h1>Agregar nuevo producto</h1>
      <form onSubmit={onSubmit}>
        <div className="input-item">
          <label> Nombre del producto</label>
          <input value={name} onChange={handleNameChange} type="text"></input>
        </div>

        <div className="input-item">
          <label>Categoria</label>
          <input
            value={categoria}
            onChange={handleCategoriaChange}
            type="text"
          ></input>
        </div>

        <div className="input-item">
          <label> Precio</label>
          <input value={price} onChange={handlePriceChange} type="text"></input>
        </div>

        <div className="input-item">
          <label> Stock</label>
          <input value={stock} onChange={handleStockChange} type="text"></input>
        </div>

        <div className="input-item">
          <label> Imagen</label>
          <input
            name="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="text"
          ></input>
        </div>
        <button className="add-to-cart-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default AddItemContainer;
