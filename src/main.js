import { changeView } from "./viewrouter/router.js";
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

const open = () => {
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
window.addEventListener("load", open);
