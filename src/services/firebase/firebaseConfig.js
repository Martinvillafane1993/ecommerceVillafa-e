import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmWOzVF1F9nG4NyAqNNREyLFi0BzcbNuw",
  authDomain: "backendecommercemartinv.firebaseapp.com",
  projectId: "backendecommercemartinv",
  storageBucket: "backendecommercemartinv.appspot.com",
  messagingSenderId: "605071461815",
  appId: "1:605071461815:web:07eb2410303779ad7a6c32"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)