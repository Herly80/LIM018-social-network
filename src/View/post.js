export default () => {
  const viewPost = `
  <h1 id= "timeline">Comentame Algo</h1>
  <a href="">Atrás</a>
  <button type="click" id="btnLogout">Cerrar Sesión</button>
  <div id="container-Post">
  <form id="signUpPost">
  <textarea id="textPost" cols="30" rows="8" type="text" autofocus></textarea>
  <button type="click" id="btnPublicar">Publicar</button>
  </form>
  <div id="containerPostUser"></div>
  </div>`;

  const containerPost = document.createElement("div");
  containerPost.innerHTML = viewPost;

  return containerPost;
};
