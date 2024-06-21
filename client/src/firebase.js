// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e8a22.firebaseapp.com",
  projectId: "mern-blog-e8a22",
  storageBucket: "mern-blog-e8a22.appspot.com",
  messagingSenderId: "364156317223",
  appId: "1:364156317223:web:391c782c957a728b866802",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

