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
