import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYUr0u_Cd7-rRxuLtNtav0-6Z-rb5eZBE",
  authDomain: "blog-app-695de.firebaseapp.com",
  projectId: "blog-app-695de",
  storageBucket: "blog-app-695de.appspot.com",
  messagingSenderId: "815818295906",
  appId: "1:815818295906:web:15c9e5715ab0e8f6fe1f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();