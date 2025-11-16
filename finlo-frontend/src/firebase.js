// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7WY6uC1xuKGsK6Y14oMIfyFQQ7QZtQzA",
  authDomain: "finlo-f9b3f.firebaseapp.com",
  projectId: "finlo-f9b3f",
  storageBucket: "finlo-f9b3f.appspot.com",
  messagingSenderId: "3439410649",
  appId: "1:3439410649:web:9170914002001e39196dc8",
  measurementId: "G-L5973ZBK1R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
