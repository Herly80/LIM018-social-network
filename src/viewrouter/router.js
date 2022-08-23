// importar todas mis vistas
import { components } from "../lib/index.js";

const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    // eslint-disable-next-line no-lone-blocks
    case "#/home": { return root.appendChild(components.viewHome()); }
    // eslint-disable-next-line no-lone-blocks
    case "#/register": { return root.appendChild(components.viewRegist()); }
    // root.textContent = "home"; // renderizar las vistas dentro del root
    default:
      break;

      // root.textContent = "404";
  }
  
};
export { changeView };
