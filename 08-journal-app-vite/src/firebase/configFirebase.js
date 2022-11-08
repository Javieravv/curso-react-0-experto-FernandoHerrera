// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_V4So0ZBGvrB0nVm2S3mm9KbAQRTkPo8",
  authDomain: "journal-app-f7631.firebaseapp.com",
  projectId: "journal-app-f7631",
  storageBucket: "journal-app-f7631.appspot.com",
  messagingSenderId: "438752843866",
  appId: "1:438752843866:web:6f60af8990dfe51a77a063",
  measurementId: "G-CHEP86W5EN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);
