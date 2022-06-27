import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHBMV2tiygMBaW_aqp7HGqXnewVSxfmho",
    authDomain: "easy-docs-da86b.firebaseapp.com",
    projectId: "easy-docs-da86b",
    storageBucket: "easy-docs-da86b.appspot.com",
    messagingSenderId: "199268974789",
    appId: "1:199268974789:web:0b5e4d7f55f472404fb0ac"
  };



// checking whether the app is already initialize or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// initialize db
const db = app.firestore();

// exporting db
export { db, firebaseConfig };