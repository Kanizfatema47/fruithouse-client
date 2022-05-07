// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth}  from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBvq0QqJc2BhW6zT-FwUyo-3KKhRg9YSPQ",
  authDomain: "warehouse-e166b.firebaseapp.com",
  projectId: "warehouse-e166b",
  storageBucket: "warehouse-e166b.appspot.com",
  messagingSenderId: "612723395478",
  appId: "1:612723395478:web:c70c188c45a9e99b6e6bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;