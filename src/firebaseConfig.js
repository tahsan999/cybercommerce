// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFCbxRpVOOLhctbSnMdGK1XvRLIfRnbf4",
  authDomain: "fdr2502-236e6.firebaseapp.com",
  databaseURL: "https://fdr2502-236e6-default-rtdb.firebaseio.com",
  projectId: "fdr2502-236e6",
  storageBucket: "fdr2502-236e6.firebasestorage.app",
  messagingSenderId: "329429911641",
  appId: "1:329429911641:web:d5e1aa8b445b45c0fec948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
