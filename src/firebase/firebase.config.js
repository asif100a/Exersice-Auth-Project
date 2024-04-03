// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGZfpEZLsReYAh4THvcF42xAZGCT6UIig",
  authDomain: "exersice-auth-project.firebaseapp.com",
  projectId: "exersice-auth-project",
  storageBucket: "exersice-auth-project.appspot.com",
  messagingSenderId: "394822346308",
  appId: "1:394822346308:web:7d88df1785aeaac8ebfe11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export  default auth;