/* eslint-disable import/no-unresolved */
import { changeView } from "./viewrouter/router.js";
import { getTask } from "../lib/firebase.js";
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();



const open = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
// window.addEventListener("load", open);

window.addEventListener("DOMContentLoaded", () => { // se ha cargado por completo el contenido del DOM
  open();
  const querySnapshot = getTask();
  const containerPostUser = document.getElementById("containerPostUser");
  let showPost = "";
  querySnapshot.then((docs) => { // realiza una accion cuando la promesa se cumpla(callback-doc)
    docs.forEach((doc) => { // vas a realizar ésto para cuando se cumpla la promesa.
      // console.log(doc.id, " => ", doc.data());
      const post = doc.data();
      const idUser = doc.id;
      showPost += `
      <div>
      <label for="name">${idUser.usuario}</label>
      <textarea id="textPost" cols="30" rows="8" type="text" placeholder="Deja tu comentario..." autofocus>${post.text}</textarea>
      </div>`;
    });
    containerPostUser.innerHTML = showPost;
  });
  
  
});
