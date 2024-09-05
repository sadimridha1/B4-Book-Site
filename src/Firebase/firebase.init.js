// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDxcFORO78ICpw8ZgaeKOedPIZHrEfFs",
  authDomain: "b4-book-site.firebaseapp.com",
  projectId: "b4-book-site",
  storageBucket: "b4-book-site.appspot.com",
  messagingSenderId: "465428373787",
  appId: "1:465428373787:web:a050408796e1cc23e533be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;