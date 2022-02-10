export const products = [
  {
    id: 1,
    name: "Dogchow",
    stock: 8,
    price: 500,
    img: "../../img/dogchow.png",
    categoria:"alimentos"

  },
  {
    id: 2,
    name: "OldPrince",
    stock: 3,
    price: 475,
    img: "../../img/oldprince.jpg",
    categoria:"alimentos"
  },
  {
    id: 3,
    name: "Ultima",
    stock: 3,
    price: 490,
    img: "../../img/ultima.jpg",
    categoria:"alimentos"

  },
  {
    id: 4,
    name: "Raza",
    stock: 5,
    price: 360,
    img: "../../img/raza.jpg",
    categoria:"alimentos"

  },
];
export const traerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});
