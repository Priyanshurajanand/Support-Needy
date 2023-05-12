import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

//Here you have to give your own firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4eh-ME_wAFO0qlPpmf3glzOKe9HO19Nk",
  authDomain: "support-needy.firebaseapp.com",
  projectId: "support-needy",
  storageBucket: "support-needy.appspot.com",
  messagingSenderId: "1018027466558",
  appId: "1:1018027466558:web:ff6a04821b0b8a9b84d66f",
  measurementId: "G-SJDKQ4H1HC"
};


const app = initializeApp({...firebaseConfig, projectId: firebaseConfig?.projectId});

export const db = getFirestore(app);
