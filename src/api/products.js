import imagenes from "../components/imagenes";


export const products = [
  {
    id: 1,
    name: "Dogchow",
    stock: 8,
    price: 500,
    img: imagenes.img1,
    categoria:"alimentos"

  },
  {
    id: 2,
    name: "OldPrince",
    stock: 3,
    price: 475,
    img: imagenes.img2,
    categoria:"alimentos"
  },
  {
    id: 3,
    name: "Ultima",
    stock: 3,
    price: 490,
    img: imagenes.img3,
    categoria:"alimentos"

  },
  {
    id: 4,
    name: "Raza",
    stock: 5,
    price: 360,
    img: imagenes.img4,
    categoria:"alimentos"

  },
];
export const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
