const btnColor = document.getElementById("Cambia"); // Botón para cambiar el fondo
const btnModal = document.getElementById("Sorpresa"); // Botón para abrir el modal
const modal = document.getElementById("modal"); // Modal
const cerrar = document.getElementById("cerrar"); // Botón para cerrar el modal

let rosa = true; // Variable para alternar entre el fondo rosa y la imagen de fondo

btnColor.addEventListener("click", function() { // Evento para cambiar el fondo
  if (rosa) { // Si rosa es true, cambia el fondo a rosa
    document.body.style.backgroundColor = "#ffe4f2"; // Cambia el fondo a rosa
  } else { // Si rosa es false, cambia el fondo a la imagen de fondo
    document.body.style.backgroundImage = "url('im.1.jpg')"; // Cambia el fondo a la imagen de fondo
    document.body.style.backgroundSize = "cover"; // Ajusta el tamaño de la imagen para cubrir toda la pantalla
    document.body.style.backgroundPosition = "center"; // Centra la imagen de fondo
    document.body.style.backgroundRepeat = "no-repeat";// Evita que la imagen de fondo se repita
  } 
  rosa = !rosa; // Alterna el valor de rosa para la próxima vez que se haga clic
}); 

btnModal.addEventListener("click", function() { // Evento para abrir el modal
  modal.style.display = "flex"; // Cambia el estilo de display del modal a "flex" para mostrarlo
});

cerrar.addEventListener("click", function() { // Evento para cerrar el modal
  modal.style.display = "none"; // Cambia el estilo de display del modal a "none" para ocultarlo
});