// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCYUhyQRjm675VsALReLAd6UdaPaDiQGso",
  authDomain: "react-authentication-f92f8.firebaseapp.com",
  projectId: "react-authentication-f92f8",
  storageBucket: "react-authentication-f92f8.appspot.com",
  messagingSenderId: "305124847801",
  appId: "1:305124847801:web:14284d0ea27477f313ab68",
  measurementId: "G-Y7G6LHD62H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
