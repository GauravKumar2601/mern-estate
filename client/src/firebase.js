// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fe203.firebaseapp.com",
  projectId: "mern-estate-fe203",
  storageBucket: "mern-estate-fe203.appspot.com",
  messagingSenderId: "723555109691",
  appId: "1:723555109691:web:09f5d586577a255d0a451e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
