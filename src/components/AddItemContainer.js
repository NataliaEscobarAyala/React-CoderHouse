import React, { useState } from "react";
import { addItem, saveImg } from "../api/collectionService";
import Swal from "sweetalert2";
import "./AddItemListContainer.css";
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
    debugger;
    if (
      ![name, categoria, price].some((field) => field === "") &&
      imageFile.length !== 0
    ) {
      const imgUrl = await saveImg(imageFile);
      const newItem = {
        name: name,
        categoria: categoria,
        price: price,
        stock: stock,
        img: imgUrl,
      };
      addItem("items", newItem)
        .then(() => {
          Swal.fire("", "Producto guardado correctamente!", "success");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error al insertar el producto, intente nuevamente!",
            footer: "",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hay campos vacios!",
        footer: "",
      });
    }
  };

  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Nuevo Producto</h3>
          <form
            class="needs-validation"
            onSubmit={onSubmit}
            className="formulario"
          >
            <div class="form-row" className="form">
              <label for="validationCustom01">Descripcion</label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                class="form-control"
                id="validationCustom01"
                placeholder="Descripcion"
                required
              />
              <div class="valid-feedback">Perfecto!</div>
            </div>
            <div class="form-row" className="form">
              <label for="validationCustom03">Categorias</label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleCategoriaChange}
              >
                <option selected>Seleccione una categoria</option>
                <option value="alimentos">Alimentos</option>
                <option value="accesorios">Accesorios</option>
                <option value="juguetes">Juguetes</option>
              </select>
              <div class="invalid-feedback">
                Por favor, seleccione una categoria.
              </div>
            </div>

            <div class="form-row" className="form">
              <div class="col">
                {" "}
                <label for="validationCustom01">Precio</label>
                <input
                  value={price}
                  onChange={handlePriceChange}
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Precio"
                  required
                />
                <div class="valid-feedback">Perfecto!</div>
              </div>
              <div class="col">
                <label for="validationCustom01">Stock</label>
                <input
                  value={stock}
                  onChange={handleStockChange}
                  type="number"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="Stock"
                  required
                />
                <div class="valid-feedback">Perfecto!</div>
              </div>
            </div>

            <div class="form-row" className="form">
              <div class="file-select" id="src-file1">
                <input
                  type="file"
                  name="src-file1"
                  aria-label="Archivo"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <img
                class="card-img-top"
                src={fileUrl}
                alt={imageFile.name}
                width="100px"
              />
              <div class="valid-feedback">Perfecto!</div>
            </div>

            <button class="btn btn-primary" type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemContainer;
