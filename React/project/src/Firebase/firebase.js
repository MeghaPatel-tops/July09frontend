// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (paste from console)
const firebaseConfig = {
  apiKey: "AIzaSyCT_BcDGYJMj2EqpNaBEUtVjJ0bmTaROKo",
  authDomain: "julyecom-7dd55.firebaseapp.com",
  projectId: "julyecom-7dd55",
  storageBucket: "julyecom-7dd55.firebasestorage.app",
  messagingSenderId: "58232728055",
  appId: "1:58232728055:web:403e3d46a42f5fb6f026f2",
  measurementId: "G-B0C4Y3KYB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db };
