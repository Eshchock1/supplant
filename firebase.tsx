import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSQxtPPZA9QH8iExKXhMFPl-YQunI2rl0",
    authDomain: "supplant-44e15.firebaseapp.com",
    databaseURL: "https://supplant-44e15.firebaseio.com",
    projectId: "supplant-44e15",
    storageBucket: "supplant-44e15.appspot.com",
  };
 
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;