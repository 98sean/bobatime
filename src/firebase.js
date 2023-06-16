import firebase from "./firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbBZOT15ZMYqCsAnB9TZUIIcTt1-Ekkgk",
  authDomain: "bobatime-final.firebaseapp.com",
  // databaseURL: "https://bobatime-final.firebaseio.com",
  projectId: "bobatime-final",
  storageBucket: "bobatime-final.appspot.com",
  messagingSenderId: "458190715774",
  appId: "1:458190715774:web:52b42d1135811dfa70912f",
  measurementId: "G-VHWDBWPZPB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;