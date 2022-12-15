import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCCIEILQ_A3ZiRXaxupTFmsZ6BYbzZiR90",
  authDomain: "dashify-4afc1.firebaseapp.com",
  projectId: "dashify-4afc1",
  storageBucket: "dashify-4afc1.appspot.com",
  messagingSenderId: "356016031497",
  appId: "1:356016031497:web:e03788d1a9c5d4db9b75d8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);