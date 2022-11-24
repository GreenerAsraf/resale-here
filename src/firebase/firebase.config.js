// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcGCuJSikSIb4BcwowIgGa7LidLKMCuuY",
  authDomain: "resale-here.firebaseapp.com",
  projectId: "resale-here",
  storageBucket: "resale-here.appspot.com",
  messagingSenderId: "9584400515",
  appId: "1:9584400515:web:8c7740bf9d331af7e023b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;