export default () => {
  const viewHome = `
  <p>Tips Saludables</p>
  <button class="iniciar">Iniciar Sesión</button>
  <a id= "regist" href="#/register">Registrarse</a>`;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewHome;

  return cajaPrincipal;
};
