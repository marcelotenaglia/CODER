import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC2PMJaUDk5kFiziS7aF9F8vacTqzoQOHs",
  authDomain: "clase13-c2bd3.firebaseapp.com",
  projectId: "clase13-c2bd3",
  storageBucket: "clase13-c2bd3.appspot.com",
  messagingSenderId: "319524214244",
  appId: "1:319524214244:web:d59a0b7d61d64341cae3f1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
