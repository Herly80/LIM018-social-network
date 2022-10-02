export default () => {
  const viewHome = `
  <a href="#/post">Publicar</a>
  <div class="boxForm">
  <h1>Tribu Saludable</h1>
  <form id="loginForm">
  <input type="email" name="" class="input" id="correo" placeholder="E-mail">
  <input type="password" name="" class="input" id="contraseña" placeholder="Contraseña">
  <input type="submit" value="Iniciar Sesión" id="loginUser"/>
  <input type="submit" value="Ingresa con Google" id="loginGoogle"/>
  <p id="pregunta">¿No tienes Cuenta?</p>
  <p><a id= "regist" href="#/register">Registrate aqui</a></p>
  </form>
  </div> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewHome;

  return cajaPrincipal;
};
