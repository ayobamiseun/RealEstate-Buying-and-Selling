// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}   from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp3NG6fGU9N5jXTiKq1ovQXAAynblvNBI",
  authDomain: "real-estate-app-8199e.firebaseapp.com",
  projectId: "real-estate-app-8199e",
  storageBucket: "real-estate-app-8199e.appspot.com",
  messagingSenderId: "935252987903",
  appId: "1:935252987903:web:c66aaad064e6f0841c61ca",
  measurementId: "G-FEP8SW1RZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
