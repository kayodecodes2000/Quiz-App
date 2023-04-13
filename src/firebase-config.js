// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-rR_5yVrUUrFrXbtB9rwDrvvsC8RS_2Y",
  authDomain: "reactquiz-b0bbc.firebaseapp.com",
  projectId: "reactquiz-b0bbc",
  storageBucket: "reactquiz-b0bbc.appspot.com",
  messagingSenderId: "703931153233",
  appId: "1:703931153233:web:718d054a6e02b1c87bb170"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const database = getFirestore(app)