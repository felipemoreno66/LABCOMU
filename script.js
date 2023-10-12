// Sticky Navigation Menu JS Code
// Selecciona el elemento 'nav' en el documento HTML
let nav = document.querySelector("nav");

// Selecciona el enlace dentro del elemento con la clase "scroll-button"
let scrollBtn = document.querySelector(".scroll-button a");

// Variable para guardar un valor (no se utiliza en este fragmento)
let val;



// Side NavIgation Menu JS Code
// Selecciona el elemento 'body' en el documento HTML
let body = document.querySelector("body");

// Selecciona el elemento con la clase "navbar"
let navBar = document.querySelector(".navbar");

// Selecciona el elemento con la clase "menu-btn"
let menuBtn = document.querySelector(".menu-btn");

// Selecciona el elemento con la clase "cancel-btn"
let cancelBtn = document.querySelector(".cancel-btn");

// Función que se ejecuta cuando se hace clic en el botón de menú
menuBtn.onclick = function() {
  // Agrega la clase "active" al elemento 'navBar'
  navBar.classList.add("active");
  // Establece la opacidad del botón de menú en 0 para ocultarlo
  menuBtn.style.opacity = "0";
  // Deshabilita los eventos de puntero en el botón de menú
  menuBtn.style.pointerEvents = "none";
  // Bloquea el desplazamiento en el cuerpo de la página
  body.style.overflow = "hidden";
  // Deshabilita los eventos de puntero en el enlace "scrollBtn"
  scrollBtn.style.pointerEvents = "none";
}

// Función que se ejecuta cuando se hace clic en el botón de cancelar
cancelBtn.onclick = function() {
  // Elimina la clase "active" del elemento 'navBar'
  navBar.classList.remove("active");
  // Restaura la opacidad del botón de menú a 1 para mostrarlo
  menuBtn.style.opacity = "1";
  // Habilita los eventos de puntero en el botón de menú
  menuBtn.style.pointerEvents = "auto";
  // Restaura el desplazamiento en el cuerpo de la página
  body.style.overflow = "auto";
  // Restaura los eventos de puntero en el enlace "scrollBtn"
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
// Selecciona todos los elementos de enlace dentro de elementos 'li' con la clase "menu"
let navLinks = document.querySelectorAll(".menu li a");

// Agrega un evento de clic a cada enlace de navegación
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    // Elimina la clase "active" del elemento 'navBar'
    navBar.classList.remove("active");
    // Restaura la opacidad del botón de menú a 1 para mostrarlo
    menuBtn.style.opacity = "1";
    // Habilita los eventos de puntero en el botón de menú
    menuBtn.style.pointerEvents = "auto";
  });
}
