// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqlQrS7HHjVup4laoyidPkeTqPqBqBqL4",
  authDomain: "bl-tech-website.firebaseapp.com",
  projectId: "bl-tech-website",
  storageBucket: "bl-tech-website.firebasestorage.app",
  messagingSenderId: "596436010512",
  appId: "1:596436010512:web:c00f4600a73d50edb82c95",
  measurementId: "G-6KP3ES86H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
