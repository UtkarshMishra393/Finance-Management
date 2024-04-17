// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "finance-management-f7820.firebaseapp.com",
  projectId: "finance-management-f7820",
  storageBucket: "finance-management-f7820.appspot.com",
  messagingSenderId: "303874035611",
  appId: "1:303874035611:web:87f026b302790f83fa5b3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);