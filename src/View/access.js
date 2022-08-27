export default () => {
  const viewAccess = `
    <a href="#/register">Atrás</a>
    <a href="#/login" id="log">Adelante</a>
    <h1 id= "cuentaGoogle">Google</h1>
    <h2 id= "cuentaAcceder">Acceder</h2>
    <h2 id = "tuCuenta">Usa tu cuenta de Google</h2>
    <input type="email" name="" id="acces" placeholder="Correo electrónico">
    <input type="text" name="" id="password" placeholder="Contraseña">
    <button id="sesion">Entrar</button> `;

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = viewAccess;

  return cajaPrincipal;
};
