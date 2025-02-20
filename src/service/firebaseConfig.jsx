// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHVAKAMP6Twmmu0WHAqUCKwYHG9n1-Wt4",
  authDomain: "ai-trip-planner-eafbb.firebaseapp.com",
  projectId: "ai-trip-planner-eafbb",
  storageBucket: "ai-trip-planner-eafbb.firebasestorage.app",
  messagingSenderId: "358960762917",
  appId: "1:358960762917:web:c481f50c874f72c724afcc",
  measurementId: "G-MSRF8GZHPE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);