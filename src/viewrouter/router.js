// importar todas mis vistas
import { components, btnRegister } from "../lib/index.js";

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    case "#/home":
    {
      root.appendChild(components.viewHome());
      return;
    }

    // eslint-disable-next-line no-fallthrough
    case "#/register":
    {
      root.appendChild(components.viewRegist());
      btnRegister("registUser");
      // return;
    }

    // root.textContent = "home"; // renderizar las vistas dentro del root
    // eslint-disable-next-line no-fallthrough
    default:
  }
};
export { changeView };
