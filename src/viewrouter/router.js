// importar todas mis vistas
import { components } from "../lib/index.js";

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    case "#/home":
    { return root.appendChild(components.viewHome()); }

    case "#/register":
    { return root.appendChild(components.viewRegist()); }
    // root.textContent = "home"; // renderizar las vistas dentro del root
    default:

      // root.textContent = "404";
  }
};
export { changeView };
