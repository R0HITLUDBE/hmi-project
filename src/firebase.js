import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxHBKBPOLQKOKEWhTAu1GvYE6qngWuaVk",
  authDomain: "ecommerce-9cb3f.firebaseapp.com",
  projectId: "ecommerce-9cb3f",
  storageBucket: "ecommerce-9cb3f.appspot.com",
  messagingSenderId: "952915468711",
  appId: "1:952915468711:web:f38248cf8e710322aed682",
  measurementId: "G-ZGDELRPGDW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
