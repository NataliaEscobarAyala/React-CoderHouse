import React, { useState } from "react";
import { addItem, saveImg } from "../api/collectionService";

const AddItemContainer = () => {
  const [name, setName] = useState("");
  const [categoria, setCategoria] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [fileUrl, setFileUrl] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoriaChange = (event) => setCategoria(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleStockChange = (event) => setStock(event.target.value);
  const handleImageChange = (event) => {
    const _imageFile = event.target.files[0];
    setImageFile(_imageFile);
    const imageUrl = URL.createObjectURL(_imageFile);
    setFileUrl(imageUrl);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (![name, categoria, price].some((field) => field === "")) {
      const imgUrl = await saveImg(imageFile);
      const newItem = {
        name: name,
        categoria: categoria,
        price: price,
        stock: stock,
        img: imgUrl,
      };
      addItem("items", newItem);
    } else {
      console.log("Hay valores vacios");
    }
  };

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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          ></input>
        </div>
        <img src={fileUrl} alt={imageFile.name} width="200px" />
        <button className="add-to-cart-button" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};
export default AddItemContainer;
