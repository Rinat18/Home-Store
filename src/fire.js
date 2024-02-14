// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKQhKUBGouuXFi86g-cgSk3zt7XpcmaGE",
  authDomain: "shophome-30183.firebaseapp.com",
  projectId: "shophome-30183",
  storageBucket: "shophome-30183.appspot.com",
  messagingSenderId: "503540866445",
  appId: "1:503540866445:web:5808fd6cc6d4e5b8f2b1c4",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire
