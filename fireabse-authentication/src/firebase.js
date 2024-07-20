// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZXWFxVzKCw0w0eifOy3CzALp7H3phZI",
  authDomain: "fir-authentication-be5a4.firebaseapp.com",
  projectId: "fir-authentication-be5a4",
  storageBucket: "fir-authentication-be5a4.appspot.com",
  messagingSenderId: "447794734165",
  appId: "1:447794734165:web:c6e058aa107d1f439460dc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
