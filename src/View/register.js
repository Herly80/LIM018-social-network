export default () => {
  const viewregist = `
  <a href="#/home">Inicio</a>
  <a href="#/access" id="go">Adelante</a>
  <div class="boxForm">
  <h1 id= "cuenta" >Registrate aqui</h1>
  <form id="registerForm">
  <input type="name" name="" class="input" id="name" placeholder="Nombre">
  <input type="email" name="" class= "input" id="emailReg" placeholder="E-mail">
  <input type="password" name="" class="input" id="passwordReg" placeholder="Contraseña">
  <button class="registrar" id="registUser">Registrarme</button>
  <button id= "regGoogle" class="regGoogle">Registrarme con Google</button>
  </form>
  </div> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewregist;

  return cajaPrincipal;
};
