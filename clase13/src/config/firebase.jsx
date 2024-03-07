import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clase13-c2bd3.firebaseapp.com",
  projectId: "clase13-c2bd3",
  storageBucket: "clase13-c2bd3.appspot.com",
  messagingSenderId: "319524214244",
  appId: "1:319524214244:web:d59a0b7d61d64341cae3f1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
