// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4_m9tuXSRGFt-r5nApzZbl4r2p2Wq1Kk",
  authDomain: "dimple-firebase-f8f87.firebaseapp.com",
  projectId: "dimple-firebase-f8f87",
  storageBucket: "dimple-firebase-f8f87.firebasestorage.app",
  messagingSenderId: "851255709879",
  appId: "1:851255709879:web:a10dc9223e85a1a4003d32",
  measurementId: "G-KDMDZ8X7BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
