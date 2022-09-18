/* eslint-disable import/no-unresolved */
import { changeView } from "./viewrouter/router.js";
import { onGetPost } from "../lib/firebase.js";
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

const open = () => {
  changeView(window.location.hash);
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};
// window.addEventListener("load", open);

window.addEventListener("DOMContentLoaded", async () => { // se ha cargado por completo el contenido del DOM
  open();
  // const querySnapshot = getTask();
  onGetPost((querySnapshot) => { // cuando ocurra un cambio, voy a recibir esos datos
    const containerPostUser = document.getElementById("containerPostUser");
    let showPost = ""; // para cuando se reciban esos datos
    // querySnapshot.then((docs) => { // realiza la accion cuando la promesa se cumpla(callback-doc)
    querySnapshot.forEach((doc) => { // ésto cuando se cumpla la promesa y recorrer 1 a 1 los datos
      // console.log(doc.id, " => ", doc.data());
      const post = doc.data();
      const idUser = doc.id;
      showPost += `
        <div>
        <label for="name">${idUser.usuario}</label>
        <textarea id="textPost" cols="30" rows="8" type="text" placeholder="Deja tu comentario..." autofocus>${post.text}</textarea>
        </div>`;
    });
    containerPostUser.innerHTML = showPost; // lo pinto en el navegador
  });
});
