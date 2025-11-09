// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVoidBL903A9q5MmsR4a3_nCwMerjMxTU",
  authDomain: "b12-a10-poroshstudymate-client.firebaseapp.com",
  projectId: "b12-a10-poroshstudymate-client",
  storageBucket: "b12-a10-poroshstudymate-client.firebasestorage.app",
  messagingSenderId: "822091463327",
  appId: "1:822091463327:web:420525de7b68426bb340aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;