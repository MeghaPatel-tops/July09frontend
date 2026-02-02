import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider,getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCT_BcDGYJMj2EqpNaBEUtVjJ0bmTaROKo",
  authDomain: "julyecom-7dd55.firebaseapp.com",
  projectId: "julyecom-7dd55",
  storageBucket: "julyecom-7dd55.firebasestorage.app",
  messagingSenderId: "58232728055",
  appId: "1:58232728055:web:403e3d46a42f5fb6f026f2",
  measurementId: "G-B0C4Y3KYB9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)