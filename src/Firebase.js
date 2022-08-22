// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyChACYNAXe8uZsVwBzRb5s65lJ7py5JTOY",
  authDomain: "adidas-d9a67.firebaseapp.com",
  projectId: "adidas-d9a67",
  storageBucket: "adidas-d9a67.appspot.com",
  messagingSenderId: "958150931613",
  appId: "1:958150931613:web:93b16461e641e8b4459074"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth};