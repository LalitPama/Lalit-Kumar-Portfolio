// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHpNnpzLRry_kqFuMlnnyl3KRrazOVgQU",
  authDomain: "my-project-ff534.firebaseapp.com",
  projectId: "my-project-ff534",
  storageBucket: "my-project-ff534.firebasestorage.app",
  messagingSenderId: "753087142958",
  appId: "1:753087142958:web:c9812a8b60ad05fa1393bf",
  measurementId: "G-4H4Q5HYJ5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);