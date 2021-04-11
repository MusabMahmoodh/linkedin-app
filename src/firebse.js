import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDqgs3LoJPpmJHsy88O-A3WWSjVxREqgk",
  authDomain: "linked-in-d1fce.firebaseapp.com",
  projectId: "linked-in-d1fce",
  storageBucket: "linked-in-d1fce.appspot.com",
  messagingSenderId: "851704700234",
  appId: "1:851704700234:web:9e4aa29925a900799a75b3",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
