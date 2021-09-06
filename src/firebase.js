import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHkNHvEgghKpDLETI2n-falQuLF4qoFME",
  authDomain: "my-2dae3.firebaseapp.com",
  projectId: "my-2dae3",
  storageBucket: "my-2dae3.appspot.com",
  messagingSenderId: "447304808219",
  appId: "1:447304808219:web:b2c6e710f0c20a5ac845be",
  measurementId: "G-DDCSK62EVG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
