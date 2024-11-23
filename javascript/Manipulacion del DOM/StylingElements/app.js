// Selecciona el primer elemento `<h1>` del documento
const tittle = document.querySelector("h1");
tittle.style.backgroundColor = 'red'; // Aplica un color de fondo rojo al elemento `<h1>`
tittle.style.color = 'white'; // Cambia el color del texto a blanco
tittle.style.fontSize = '38px'; // Ajusta el tamaño de la fuente a 38px

// Selecciona el primer elemento `<menu>` del documento
const menu = document.querySelector("menu");
menu.style.fontSize = '22px'; // Ajusta el tamaño de la fuente del menú a 22px
menu.style.border = '1px solid'; // Agrega un borde de 1px sólido al menú
menu.className = 'main-menu'; // Asigna la clase CSS 'main-menu' al menú (reemplaza cualquier clase previa)

// Selecciona el primer elemento `<button>` del documento
const button = document.querySelector("button");

// Agrega un evento 'click' al botón
button.addEventListener("click", () => {
    // Alterna la clase CSS 'invisible' en el menú
    // Si la clase 'invisible' no está presente, la agrega; si está presente, la elimina
    menu.classList.toggle('invisible');
});
