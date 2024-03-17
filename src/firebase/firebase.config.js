// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd9RuvzBKOshQiRLvI8zKGLUyJ7rbGmp4",
  authDomain: "assignment-12-d99e7.firebaseapp.com",
  projectId: "assignment-12-d99e7",
  storageBucket: "assignment-12-d99e7.appspot.com",
  messagingSenderId: "30555573936",
  appId: "1:30555573936:web:dcbf12f9a96fb5f554b575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;