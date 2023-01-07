import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const { REACT_APP_FIREBASE_KEY: FIREBASE_KEY } = process.env;

const firebase = {
  apiKey: FIREBASE_KEY,
  authDomain: "greydive-challenge-9fab3.firebaseapp.com",
  projectId: "greydive-challenge-9fab3",
  storageBucket: "greydive-challenge-9fab3.appspot.com",
  messagingSenderId: "104291599982",
  appId: "1:104291599982:web:8bf13de1c80a6e59fc487f",
  measurementId: "G-ZPQYDP7033",
};

const app = initializeApp(firebase);
export const db = getFirestore(app);
