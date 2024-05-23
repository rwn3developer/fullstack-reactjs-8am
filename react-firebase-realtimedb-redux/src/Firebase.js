// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpXQNhqHkOyGlqHp_oCwHT1vIJYqIdrcA",
  authDomain: "react-8am-firebase-realtime.firebaseapp.com",
  databaseURL: "https://react-8am-firebase-realtime-default-rtdb.firebaseio.com",
  projectId: "react-8am-firebase-realtime",
  storageBucket: "react-8am-firebase-realtime.appspot.com",
  messagingSenderId: "165815498880",
  appId: "1:165815498880:web:40d13f559a34ef2c174e65",
  measurementId: "G-CWKJVNEP9P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
