// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6JWuyoA6Y0dglSdroF4KebdL141Tn0UE",
  authDomain: "puppey-petshop.firebaseapp.com",
  projectId: "puppey-petshop",
  storageBucket: "puppey-petshop.appspot.com",
  messagingSenderId: "361390813960",
  appId: "1:361390813960:web:f29ef0fa6ff822cdb8f2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);