import {
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

//Obtiene todos los elementos de la coleccion
export const getItems = async (collectionName) => {
  const itemCollection = collection(db, collectionName);
  return await getDocs(itemCollection)
    .then((snapshot) => {
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .catch((error) => {
      console.log(error);
    });
};
//Obtiene un elemento de la coleccion, filtrando por ID
export const getItem = async (collectionName, itemId) => {
  const itemRef = doc(db, collectionName, itemId);
  return await getDoc(itemRef)
    .then((item) => {
      return item;
    })
    .catch((error) => {
      console.log(error);
    });
};
//Guarda un nuevo elemento en la coleccion
export const addItem = async (collectionName, newItem) => {
  const itemCollection = collection(db, collectionName);
  return await addDoc(itemCollection, newItem)
    .then((doc) => {
      console.log("Se guardo correctamente", doc.id);
    })
    .catch((error) => {
      console.log(error);
    });
};
//Actualiza un elemento de la coleccion
export const updateItem = async (collectionName, item) => {
  const itemRef = doc(db, collectionName, item.id);
  return await updateDoc(itemRef, item)
    .then((res) => {
      console.log("Actualizado ");
    })
    .catch((error) => {
      console.log(error);
    });
};

//Guarda una imagen en el Storage de firebase y devuelve la URL de descarga
export const saveImg = async (file) => {
  const imagesRef = ref(storage, `img/${file.name}`);
  //Guarda la imagen
  await uploadBytes(imagesRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  //Obtiene URL/ruta de la imagen
  return await getDownloadURL(ref(storage, `img/${file.name}`)).then((url) => {
    return url;
  });
};