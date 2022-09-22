import firstView from "../View/home.js";
import secondView from "../View/register.js";
import threeView from "../View/post.js";
import
{
  auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, createPost, getCurrentUser,

} from "./firebase.js";

// creando objetos con las vistas para exportarlas a router.js
const components = {
  viewHome: firstView,
  viewRegister: secondView,
  viewPost: threeView,
};

export { components };

// asignandole evento al boton Registrar de la segunda vista
export const signUpRegister = (btn) => {
  const signUpFormRegister = document.getElementById("signUpForm");
  const signUpBotonRegister = document.getElementById(btn);
  signUpBotonRegister.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpName = document.getElementById("name").value;
    const signUpEmail = document.getElementById("emailReg").value;
    const signUpPassword = document.getElementById("passwordReg").value;
    // input del formulario para registrar
    // console.log(signUpName, signUpEmail, signUpPassword);

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)

      .then((userCredential) => {
        // registrado
        signUpFormRegister.reset(); // limpia el formulario
        // eslint-disable-next-line no-alert
        alert("usuario registrado!!");
        const user = userCredential.user;
        const userName = signUpName;
        console.log(user, userName);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(errorCode);
        // eslint-disable-next-line no-alert
        alert(errorMessage);
        // ..
      });
  });
};

// asignandole evento al boton de home para iniciar sesion
export const signUpLogin = (boton) => {
  const formLogin = document.getElementById("loginForm");
  const signUpLoginUser = document.getElementById(boton);
  signUpLoginUser.addEventListener("click", (e) => {
    e.preventDefault();
    const signUpLoginUserEmail = document.getElementById("correo").value;
    const signUpLoginUserPassword = document.getElementById("contraseña").value;
    // console.log(signUpLoginUserEmail,signUpLoginUserPassword);
    signInWithEmailAndPassword(auth, signUpLoginUserEmail, signUpLoginUserPassword)

      .then((userCredential) => {
        // logueado
        formLogin.reset(); // limpia el formulario
        // eslint-disable-next-line no-alert
        alert("Ha iniciado sesión!!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        formLogin.reset();
        // eslint-disable-next-line no-alert
        alert(errorCode);
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      });
  });
};

// asignando evento para capturar datos del textarea de la vista post
export const sendComment = (comentario) => {
  const sendCommentText = document.getElementById(comentario);
  sendCommentText.addEventListener("click", (e) => {
    e.preventDefault();
    const writeComment = document.getElementById("textPost").value;
    const user = getCurrentUser();
    const userId = user.uid;
    // publicar con el usuario logueado
    createPost(userId, writeComment);
    // eslint-disable-next-line no-alert
    alert("Su mensaje ha sido creado");
  });
};
