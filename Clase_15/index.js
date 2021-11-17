window.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#click-me');  //busca un elemento dentro del DOM
    button.addEventListener('click', () => {
        console.log("Haz hecho click!");
    });
});