/* eslint-disable import/no-unresolved */
import { changeView } from "./viewrouter/router.js";
import { onGetPost, deletePost, signOut, auth } from "../lib/firebase.js";
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
        <div class="boxPost">
        <label for="name" id="userTag">Hola ${post.displayname}!!</label>
        <p id="commentUser">${post.text}</p>
        <button id="btnDelete" data-id="${idDoc}">Eliminar</button>
        <button id="btnEdit" data-id="${idDoc}">Editar</button>
        </div>`;
    });
    containerPostUser.innerHTML = showPost;
    const btnsDelete = containerPostUser.querySelectorAll("#btnDelete");
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });
    const btnsEdit = containerPostUser.querySelectorAll("#btnEdit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", ({ target: { dataset } }) => {
        console.log(dataset.id);
      });
    });
    const btnLogout = document.querySelector("#btnLogout");
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          // sessionStorage.clear();
          alert("Se ha cerrado sesión");
          window.location.hash = "#/home";
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  });
});
