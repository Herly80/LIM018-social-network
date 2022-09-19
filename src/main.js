/* eslint-disable import/no-unresolved */
import { changeView } from "./viewrouter/router.js";
import { onGetPost, deletePost } from "../lib/firebase.js";
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
      const idDoc = doc.id;
      showPost += `
        <div>
        <label for="name">${post.usuario}</label>
        <textarea id="textPost" cols="25" rows="6" type="text">${post.text}</textarea>
        <button class="btnDelete" data-id="${idDoc}">Eliminar</button>
        <button class="btnEdit" data-id="${idDoc}">Editar</button>
        </div>`;
    });
    containerPostUser.innerHTML = showPost; // lo pinto en el navegador

    const btnsDelete = containerPostUser.querySelectorAll(".btnDelete");
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });
    const btnsEdit = containerPostUser.querySelectorAll(".btnEdit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        console.log(dataset.id);
      });
    });
  });
});
