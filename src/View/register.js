export default () => {
  const viewregist = `
  <a href="#/home">Inicio</a>
  <a href="#/access" id="go">Adelante</a>
  <h1 id= "cuenta" >Registrate aqui</h1>
  <input type="name" name="" id="name" placeholder="Nombre">
  <input type="email" name="" id="emailReg" placeholder="E-mail">
  <input type="password" name="" id="passwordReg" placeholder="Contraseña">
  <button class="registrar">Registrarme</button>
  <button id= "regGoogle" class="regGoogle">Registrarme con Google</button> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewregist;

  return cajaPrincipal;
};
