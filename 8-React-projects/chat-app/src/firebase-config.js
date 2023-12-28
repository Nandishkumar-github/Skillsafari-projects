// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMba5RcfMebAE-Fne3W5Uru1uHXM7LCX4",
  authDomain: "chatapp-2682c.firebaseapp.com",
  projectId: "chatapp-2682c",
  storageBucket: "chatapp-2682c.appspot.com",
  messagingSenderId: "602788619867",
  appId: "1:602788619867:web:9debba3f95f909c727817e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);