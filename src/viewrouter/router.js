// importar todas mis vistas
// eslint-disable-next-line import/named
import { components, signUpRegister, signUpLogin } from "../lib/index.js";

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    case "":
    {
      root.appendChild(components.viewHome());
      signUpLogin("loginUser");
      return;
    }

    // eslint-disable-next-line no-fallthrough
    case "#/register":
    {
      root.appendChild(components.viewRegister());
      signUpRegister("registUser");
      // a modo de prueba a ver si el formulario recibe los eventos
    }

    // root.textContent = "home"; // renderizar las vistas dentro del root
    // eslint-disable-next-line no-fallthrough
    default:
  }
};
export { changeView };
