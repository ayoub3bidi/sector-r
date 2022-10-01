import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWawYx2_8JQznffQ0aseYJhJh4TET6iOY",
  authDomain: "sector-r-74929.firebaseapp.com",
  projectId: "sector-r-74929",
  storageBucket: "sector-r-74929.appspot.com",
  messagingSenderId: "611978208693",
  appId: "1:611978208693:web:98a6ffd8022b9f129d25fc"
};

// ? Initialize Firebase
export const app = initializeApp(firebaseConfig);
// ? Firebase authentication
export const auth = getAuth() 
// ? Firebase storage
export const storage = getStorage();
// ? Firebase dataBase
export const db = getFirestore();
