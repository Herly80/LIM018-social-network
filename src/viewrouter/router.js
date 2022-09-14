// importar todas mis vistas
// eslint-disable-next-line import/named
import
{
  components, signUpRegister, signUpLogin, sendComment,
} from "../lib/index.js";

// eslint-disable-next-line consistent-return
const changeView = (route) => {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  switch (route) {
    case "":
    {
      root.appendChild(components.viewHome());
      signUpLogin("loginUser");
      break;
    }

    // eslint-disable-next-line no-fallthrough
    case "#/register":
    {
      root.appendChild(components.viewRegister());
      signUpRegister("registUser");
      break;
      // a modo de prueba a ver si el formulario recibe los eventos
    }
    // eslint-disable-next-line no-fallthrough
    case "#/post":
    {
      root.appendChild(components.viewPost());
      sendComment("btnPublicar");
      break;
    }

    // eslint-disable-next-line no-fallthrough
    default:
  }
};
export { changeView };
