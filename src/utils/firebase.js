// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qyCbqHHkQoJF8o0xhUrPeiVFEnWS8Ak",
  authDomain: "netflixgpt-874ac.firebaseapp.com",
  projectId: "netflixgpt-874ac",
  storageBucket: "netflixgpt-874ac.appspot.com",
  messagingSenderId: "114393734363",
  appId: "1:114393734363:web:7542e6446c2f928b2880fe",
  measurementId: "G-WMGGZR7709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
