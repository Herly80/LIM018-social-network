// importar todas tus vistas

const changeView = (route) => {
  const root = document.querySelector("#root");

  switch (route) {
    case "#/home":
      root.textContent = "home"; // renderizas las vistas dentro del root
      break;
    case "#/register":
      root.textContent = "register"; // renderizas las vistas dentro del root
      break;
    default:
      root.textContent = "404";
  }

};
export { changeView };
