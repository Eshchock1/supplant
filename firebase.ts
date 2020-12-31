import firebase from "firebase";
import 'firebase/functions';
import 'firebase/auth';
import 'firebase/firestore';

import {firebaseConfig} from './envars'


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
export const FirebaseProvider = firebase;