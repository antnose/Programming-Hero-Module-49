// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFCb6m-I9qL0vVgv1lPisQUATDEh_hRng",
  authDomain: "simple-firebase2-5221e.firebaseapp.com",
  projectId: "simple-firebase2-5221e",
  storageBucket: "simple-firebase2-5221e.firebasestorage.app",
  messagingSenderId: "81858449869",
  appId: "1:81858449869:web:1badf0c1678217e60e3484",
  measurementId: "G-8ZQ7V1T7T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
