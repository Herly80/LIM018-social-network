// aqui exportaras las funciones que necesites

// export const myFunction = () => {

// aqui tu codigo
// console.log(alert('Hola mundo!'));
// }
import firstView from "../View/home.js";
import secondView from "../View/register.js";
import threeView from "../View/access.js";
import fourView from "../View/login.js";

const components = {
  viewHome: firstView,
  viewRegist: secondView,
  viewAccess: threeView,
  viewLogin: fourView,
};

export { components };
