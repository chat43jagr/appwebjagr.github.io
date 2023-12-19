// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFGT8GVRT9lsmomR-l4Skj-VXV26E4s9U",
  authDomain: "appwebjagr.firebaseapp.com",
  projectId: "appwebjagr",
  storageBucket: "appwebjagr.appspot.com",
  messagingSenderId: "779635902312",
  appId: "1:779635902312:web:c3365bc925edad7a7638dd",
  measurementId: "G-5TPS3HKZTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
