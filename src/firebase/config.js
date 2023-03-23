
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2qqdyfx4IDQQZqJPSFJgskc2RkhUvu_M",
  authDomain: "exempleprojet-326a0.firebaseapp.com",
  projectId: "exempleprojet-326a0",
  storageBucket: "exempleprojet-326a0.appspot.com",
  messagingSenderId: "837801339375",
  appId: "1:837801339375:web:d5b2406548f0f1599dee1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export { database };