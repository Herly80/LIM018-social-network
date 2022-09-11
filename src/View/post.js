export default () => {
  const viewPost = `
  <h1 id= "timeline">Comentame Algo</h1>
  <a href="">Atrás</a>
  <div id="container-Post">
  <form id="signUpPost">
  <textarea id="textPost" cols="40" rows="10" type="text" placeholder="Deja tu comentario..." autofocus></textarea>
  <button type="click" id="btnPublicar">Publicar</button>
  </form>
  </div>`;

  const containerPost = document.createElement("div");
  containerPost.innerHTML = viewPost;

  return containerPost;
};
