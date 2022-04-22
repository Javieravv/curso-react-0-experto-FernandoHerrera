// Configuraciń de firefox

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2lhR6CcP0CzoB5VO8eG9BCGWMEFq8aZM",
    authDomain: "aprendiendo-reactjs.firebaseapp.com",
    projectId: "aprendiendo-reactjs",
    storageBucket: "aprendiendo-reactjs.appspot.com",
    messagingSenderId: "1044136963042",
    appId: "1:1044136963042:web:9402e5482865f61220e7bb"
  };

// Initialize Firebase
//const app = initializeApp (firebaseConfig);
firebase.initializeApp (firebaseConfig);

// Configuraciones adicionales para base de datos para grabar en firestore
// y para programar el provider para autenticarse con Google

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { 
    db,
    googleAuthProvider,
    firebase
}
