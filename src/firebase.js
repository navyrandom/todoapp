import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMU4XlOVQAPVzUQVQupEHjNSrVvUsxf3g",
  authDomain: "todoapp-0001-20374.firebaseapp.com",
  projectId: "todoapp-0001-20374",
  //databaseURL: "https://todoapp-0001.firebaseio.com",
  storageBucket: "todoapp-0001-20374.appspot.com",
  messagingSenderId: "1094055081551",
  appId: "1:1094055081551:web:9d8a805b7c7f585f191c3a",
  measurementId: "G-X3STE04NZ7"
});

const db = firebaseApp.firestore();

export default db;
