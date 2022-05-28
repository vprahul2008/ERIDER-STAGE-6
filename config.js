import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCU-wdwQ-S3iM6sKfFUlnwV2nITgTLpaN4",
  authDomain: "e-rider-app-5b520.firebaseapp.com",
  projectId: "e-rider-app-5b520",
  storageBucket: "e-rider-app-5b520.appspot.com",
  messagingSenderId: "883811245397",
  appId: "1:883811245397:web:0d4ace918247feadf6a3dc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
