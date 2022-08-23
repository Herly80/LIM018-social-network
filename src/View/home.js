export function initSesion() {
  const btninit = document.getElementsByClassName("#iniciar");
  const registrar = document.getElementById("regist");

  const cajaPrincipal = document.createElement("div");
  cajaPrincipal.innerHTML = btninit;
  cajaPrincipal.innerHTML = registrar;

  return cajaPrincipal;
}
