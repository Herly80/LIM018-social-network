export default () => {
  const viewHome = `
  <div>
  <p>Tribu Saludable</p>
  </div>
  <input type="email" name="" id="correo" placeholder="E-mail">
  <input type="password" name="" id="contraseña" placeholder="Contraseña">
  <button class="iniciar">Iniciar Sesión</button>
  <button id= "ingGoogle" class="ingGoogle">Ingresa con Google</button>
  <p id=pregunta>¿No tienes Cuenta?</p>
  <a id= "regist" href="#/register">Registrate aqui</a>`;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewHome;

  return cajaPrincipal;
};
