// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCx_4pANroL8w6WU2npnLwzgrqohPSgL9s",
  authDomain: "ecommerce-petshop-902f5.firebaseapp.com",
  projectId: "ecommerce-petshop-902f5",
  storageBucket: "ecommerce-petshop-902f5.appspot.com",
  messagingSenderId: "667968712181",
  appId: "1:667968712181:web:237a1beca1e2c3c32f84bc",
  measurementId: "G-9CHFR2P099",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
