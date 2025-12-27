// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdOTjKvwQyXlou0IsB2_HRr_kB2-YKQbI",
  authDomain: "coffee-house-client-12aca.firebaseapp.com",
  projectId: "coffee-house-client-12aca",
  storageBucket: "coffee-house-client-12aca.firebasestorage.app",
  messagingSenderId: "588807182756",
  appId: "1:588807182756:web:5216c6aef9b25170a98931",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
