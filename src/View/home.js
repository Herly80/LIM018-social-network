export default () => {
  const viewHome = `
  <div class="boxForm">
  <h1>Tribu Saludable</h1>
  <form>
  <input type="email" name="" id="correo" placeholder="E-mail">
  <input type="password" name="" id="contraseña" placeholder="Contraseña">
  <button class="iniciar">Iniciar Sesión</button>
  <button id= "ingGoogle" class="ingGoogle">Ingresa con Google</button>
  <p id="pregunta">¿No tienes Cuenta?</p>
  <p><a id= "regist" href="#/register">Registrate aqui</a></p>
  </form>
  </div> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewHome;

  return cajaPrincipal;
};
