import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAkOLz0bjtEoI6a4KU6XnD9AHNQqq9TQqM',
  authDomain: 'plyat-tgr.firebaseapp.com',
  projectId: 'plyat-tgr',
  storageBucket: 'plyat-tgr.appspot.com',
  messagingSenderId: '694773970643',
  appId: '1:694773970643:web:108fd589bfb8db32e28626',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const db = getFirestore(app);
export const storage = getStorage(app);
