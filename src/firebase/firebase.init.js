// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWHXvf4T7p6sMxkOW6pFzmumG1qfKXZkw",
  authDomain: "simple-firebase-31ffb.firebaseapp.com",
  projectId: "simple-firebase-31ffb",
  storageBucket: "simple-firebase-31ffb.firebasestorage.app",
  messagingSenderId: "542628998231",
  appId: "1:542628998231:web:72ba2f76e17dad07368712",
  measurementId: "G-T3Q1RN9HGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
