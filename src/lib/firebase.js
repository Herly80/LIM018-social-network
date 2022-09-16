// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https:/www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

// eslint-disable-next-line import/no-unresolved
import {
  getFirestore, collection, addDoc, getDocs,
// eslint-disable-next-line import/no-unresolved
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

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
const db = getFirestore(app);

const createPost = (userId, comentario) => addDoc(collection(db, "post"), {
  text: comentario,
  usuario: userId,
});
const getCurrentUser = () => auth.currentUser;

// ésto me permite leer el texto que ingresa el usuario y su id en la consola
// const querySnapshot = getDocs(collection(db, "post"));
// querySnapshot.then((docs) => { // realiza una accion cuando la promesa se cumpla(callback-doc)
//   docs.forEach((doc) => { // vas a realizar ésto para cuando se cumpla la promesa.
//     console.log(doc.id, " => ", doc.data());
//   });
// });
const getTask = () => getDocs(collection(db, "post"));

export {
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, createPost, getCurrentUser,
  getTask,
};
