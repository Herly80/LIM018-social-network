export default () => {
  const viewregist = `
  <a href="#/home">Iniciar Sesión</a>
  <a href="#/post" id="go">Adelante</a>
  <div class="boxForm">
  <h1 id= "cuenta" >Registrate aqui</h1>
  <form id="signUpForm">
  <input type="name" name="" class="input" id="name" placeholder="Nombre">
  <input type="email" name="" class= "input" id="emailReg" placeholder="E-mail">
  <input type="password" name="" class="input" id="passwordReg" placeholder="Contraseña">
  <input type="submit" value="Registrarme" id="registUser"/>
  <input type="submit" value="Registrarme con Google" id="regGoogle"/>
  </form>
  </div> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewregist;

  return cajaPrincipal;
};
