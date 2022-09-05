// aqui exportaras las funciones que necesites

// export const myFunction = () => {

// aqui tu codigo
// }
import firstView from "../View/home.js";
import secondView from "../View/register.js";

const components = {
  viewHome: firstView,
  viewRegist: secondView,
};

export { components };
// asignandole evento al fomrulario de la segunda vista
export const signUpRegister = (enterText) => {
  const signUpRegisterUser = document.getElementById(enterText);
  signUpRegisterUser.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("si me ves, es porque lo lograste");
  });
};
// asignandole evento al fomrulario de home
export const singUpLogin = (formulario) => {
  const singUpLoginUser = document.getElementById(formulario);
  singUpLoginUser.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Funciona!!");
  });
};
