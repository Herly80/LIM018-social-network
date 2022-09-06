import firstView from "../View/home.js";
import secondView from "../View/register.js";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

const components = {
  viewHome: firstView,
  viewRegister: secondView,
};

export { components };

// asignandole evento al fomrulario de la segunda vista
export const signUpRegister = (btn) => {
  const signUpBotonRegister = document.getElementById(btn);
  signUpBotonRegister.addEventListener("click", (e) => {
    e.preventDefault();
    // const signUpName = document.getElementById("name").value;
    const signUpEmail = document.getElementById("emailReg").value;
    const signUpPassword = document.getElementById("passwordReg").value;
    // console.log(signUpEmail, signUpPassword);

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)

      .then((userCredential) => {
        // registrado
        console.log("usuario registrado!!");
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

// asignandole evento al fomrulario de home
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
        console.log("usuario logueado!!");
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
