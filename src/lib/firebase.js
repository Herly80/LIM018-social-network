// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https:/www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// eslint-disable-next-line import/no-unresolved
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD_ieHFJNXtLF7lbApWstQo96qtOtFU4Y",
  authDomain: "social-network-bc0e7.firebaseapp.com",
  projectId: "social-network-bc0e7",
  storageBucket: "social-network-bc0e7.appspot.com",
  messagingSenderId: "702892591009",
  appId: "1:702892591009:web:48decc067c011246216de0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// autenticacion de usuario
const auth = getAuth(app);
// para registrar usuario con correo y contraseña e iniciar sesión
// const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
