import firebase from "firebase";
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHZapQ_z0uxq3WZfgWJT8__Xle0dT5Ny0",
  authDomain: "supplant-org.firebaseapp.com",
  projectId: "supplant-org",
  storageBucket: "supplant-org.appspot.com",
  messagingSenderId: "572775057762",
  appId: "1:572775057762:android:bf090ae7e6b9859dae843b",
  measurementId: "G-MWLPQTCZSQ"
};


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
export const FirebaseProvider = firebase;