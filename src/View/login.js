export default () => {
  const viewLogin = `
      <a href="#/access">Atrás</a>
      <a href="#/home" id="loguear">Inicio</a>
      <input type="email" name="" id="login" placeholder="E-mail">
      <input type="password" name="" id="clave" placeholder="Contraseña">
      <button id="enter">Iniciar Sesión</button>
      <button id= "ingFacebook" class="ingFacebook">Ingresar con Facebook</button> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewLogin;

  return cajaPrincipal;
};
