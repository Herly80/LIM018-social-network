import firstView from "../View/home.js";
import secondView from "../View/register.js";
import threeView from "../View/post.js";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

// creando objetos con las vistas para exportarlas a router.js
const components = {
  viewHome: firstView,
  viewRegister: secondView,
  viewPost: threeView,
};

export { components };

// asignandole evento al boton Registrar de la segunda vista
export const signUpRegister = (btn) => {
  const signUpBotonRegister = document.getElementById(btn);
  signUpBotonRegister.addEventListener("click", (e) => {
    e.preventDefault();
    // const signUpName = document.getElementById("name").value;
    const signUpEmail = document.getElementById("emailReg").value;
    const signUpPassword = document.getElementById("passwordReg").value;
    // input del formulario para registrar
    // console.log(signUpEmail, signUpPassword);

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)

      .then((userCredential) => {
        // registrado
        alert("usuario registrado!!");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
};

// asignandole evento al boton de home para iniciar sesion
export const signUpLogin = (boton) => {
  const signUpLoginUser = document.getElementById(boton);
  signUpLoginUser.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpLoginUserEmail = document.getElementById("correo").value;
    const signUpLoginUserPassword = document.getElementById("contraseña").value;
    // console.log(signUpLoginUserEmail,signUpLoginUserPassword);
    signInWithEmailAndPassword(auth, signUpLoginUserEmail, signUpLoginUserPassword)

      .then((userCredential) => {
        // logueado
        alert("usuario logueado!!");
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  });
};
// asignando evento para capturar datos del textarea de la vista post
export const sendComment = (comentario) => {
  const sendCommentText = document.getElementById(comentario);
  sendCommentText.addEventListener("click", (e) => {
    e.preventDefault();
    const writeComment = document.getElementById("textPost").value;
    // input del texTarea para comentar
    console.log(writeComment);
  });
};