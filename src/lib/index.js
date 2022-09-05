// aqui exportaras las funciones que necesites

// export const myFunction = () => {

// aqui tu codigo
// }
import firstView from "../View/home.js";
import secondView from "../View/register.js";
// import { myFunction } from "./firebase.js";

const components = {
  viewHome: firstView,
  viewRegister: secondView,
};

export { components };

// asignandole evento al fomrulario de la segunda vista
export const signUpRegister = (formulario) => {
  const signUpForm = document.getElementById(formulario);
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const signUpName = document.getElementById("name").value;
    const signUpEmail = document.getElementById("emailReg").value;
    const signUpPassword = document.getElementById("passwordReg").value;
    console.log(signUpName);
    console.log(signUpEmail);
    console.log(signUpPassword);
    // myFunction(u,re).then((result)=>
  });
};

// asignandole evento al fomrulario de home
export const signUpLogin = (formulario) => {
  const signUpLoginUser = document.getElementById(formulario);
  signUpLoginUser.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Funciona!!");
  });
};
