export default () => {
  const viewregist = `
  <a href="#/home">Inicio</a>
  <h1>Crear tu Cuenta</h1>
  <button class="regGoogle">Registrarme con Google</button> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewregist;

  return cajaPrincipal;
};
