// import imagenes from "../components/imagenes";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
// export const products = [
//   {
//     id: 1,
//     name: "Dogchow",
//     stock: 8,
//     price: 500,
//     img: imagenes.img1,
//     categoria:"alimentos"

//   },
//   {
//     id: 2,
//     name: "OldPrince",
//     stock: 3,
//     price: 475,
//     img: imagenes.img2,
//     categoria:"alimentos"
//   },
//   {
//     id: 3,
//     name: "Ultima",
//     stock: 3,
//     price: 490,
//     img: imagenes.img3,
//     categoria:"alimentos"

//   },
//   {
//     id: 4,
//     name: "Raza",
//     stock: 5,
//     price: 360,
//     img: imagenes.img4,
//     categoria:"alimentos"

//   },
//   {
//     id: 5,
//     name: "Cama-Color: Verde",
//     stock: 5,
//     price: 1200,
//     img: imagenes.img5,
//     categoria:"accesorios"

//   },
//   {
//     id: 6,
//     name: "collar",
//     stock: 5,
//     price: 500,
//     img: imagenes.img6,
//     categoria:"accesorios"

//   },
//   {
//     id: 7,
//     name: "kit",
//     stock: 5,
//     price: 2400,
//     img: imagenes.img7,
//     categoria:"accesorios"

//   },
//   {
//     id: 8,
//     name: "Gorrito",
//     stock: 5,
//     price: 370,
//     img: imagenes.img8,
//     categoria:"accesorios"

//   },
  
//   {
//     id: 9,
//     name: "Mancuerna-Tela",
//     stock: 5,
//     price: 520,
//     img: imagenes.img9,
//     categoria:"juguetes"

//   },{
//     id: 10,
//     name: "Pelotita",
//     stock: 5,
//     price: 200,
//     img: imagenes.img10,
//     categoria:"juguetes"

//   },
//   {
//     id: 11,
//     name: "Soga",
//     stock: 5,
//     price: 300,
//     img: imagenes.img11,
//     categoria:"juguetes"

//   },
//   {
//     id:12,
//     name: "Kit",
//     stock: 5,
//     price: 2400,
//     img: imagenes.img7,
//     categoria:"juguetes"

//   },

// ];
export const traerProductos = new Promise((resolve, reject) => {
  
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const product = snapshot.docs.map( (doc) =>({id: doc.id, ... doc.data()}) )
        resolve(product)
        console.log(product);
      })
      .catch(error => {
        console.log(error);
        reject(error)
      });
});
