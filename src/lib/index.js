// aqui exportaras las funciones que necesites

// export const myFunction = () => {

// aqui tu codigo
// console.log(alert('Hola mundo!'));
// }
import firstView from "../View/home.js";
import secondView from "../View/register.js";

const components = {
  viewHome: firstView,
  viewRegist: secondView,
};

export { components };

export const btnRegister = (botonReg) => {
  const btnRegisterUser = document.getElementById(botonReg);
  btnRegisterUser.addEventListener("click", () => {
    // eslint-disable-next-line no-alert
    alert("si me ves, es porque lo lograste");
  });
};
