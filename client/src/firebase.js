// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-65e55.firebaseapp.com",
  projectId: "mern-blog-65e55",
  storageBucket: "mern-blog-65e55.firebasestorage.app",
  messagingSenderId: "258946413976",
  appId: "1:258946413976:web:eae5fb2bf945b41ac4a7ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

