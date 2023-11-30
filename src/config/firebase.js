// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBKmpmFQ2xYlcI7naVRemJaOcfcVDmwiYk",
  authDomain: "notes-baas.firebaseapp.com",
  projectId: "notes-baas",
  storageBucket: "notes-baas.appspot.com",
  messagingSenderId: "532023714065",
  appId: "1:532023714065:web:7298bf12c77adff3196cb0",
  measurementId: "G-SSCYB11RSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// connect Db //

export const db = getFirestore(app);