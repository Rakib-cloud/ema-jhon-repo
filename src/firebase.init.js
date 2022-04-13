// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6tMbkUbsdvdWWVZ73WzY9dekxC7ILQ28",
  authDomain: "ema-jhon-firebase-efee3.firebaseapp.com",
  projectId: "ema-jhon-firebase-efee3",
  storageBucket: "ema-jhon-firebase-efee3.appspot.com",
  messagingSenderId: "434606810697",
  appId: "1:434606810697:web:1c846427690fe0d3a18198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;