// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATiknrUcvvOjPoHJK68HX0IqaDDY3pI8c",
  authDomain: "react-app-firebase-4a242.firebaseapp.com",
  projectId: "react-app-firebase-4a242",
  storageBucket: "react-app-firebase-4a242.appspot.com",
  messagingSenderId: "709046278113",
  appId: "1:709046278113:web:59aa6884304ab381c424a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
