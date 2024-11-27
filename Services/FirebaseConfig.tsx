// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "irfan-express-bebae.firebaseapp.com",
  projectId: "irfan-express-bebae",
  storageBucket: "irfan-express-bebae.firebasestorage.app",
  messagingSenderId: "98180040253",
  appId: "1:98180040253:web:a063d33000b7ecaf434c54",
  measurementId: "G-MY9ZR40MB8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)