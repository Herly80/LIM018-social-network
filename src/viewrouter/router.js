// importar todas mis vistas
// eslint-disable-next-line import/named
import { components, signUpRegister, singUpLogin } from "../lib/index.js";

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    case "#/home":
    {
      root.appendChild(components.viewHome());
      singUpLogin("loginForm");
      return;
    }

    // eslint-disable-next-line no-fallthrough
    case "#/register":
    {
      root.appendChild(components.viewRegist());
      signUpRegister("signUpForm");
      // btnRegister es a modo de prueba de que el boton recibe el evento
    }

    // root.textContent = "home"; // renderizar las vistas dentro del root
    // eslint-disable-next-line no-fallthrough
    default:
  }
};
export { changeView };
