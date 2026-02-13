
function cambiarTexto() {
    document.getElementById("title").innerText = ("Observa a Snoopy en San Valentín 👀");
}

function cambiarColor() {
    document.body.style.backgroundColor = "rgb(226, 100, 100)";
}

let imagenes = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let indice = 0;

function cambiarImagen() {
    indice++; 

    if (indice >= imagenes.length) {
        indice = 0;
    }

    document.getElementById("img").src = imagenes[indice];
}

function ocultar() {
    let imagen = document.getElementById("img");

    if (imagen.style.display === "none") {
        imagen.style.display = "";
    } else {
        imagen.style.display = "none";
    }
}

function modoOscuro() {
    let body = document.body;

    if (body.style.backgroundColor === "rgb(30, 30, 30)") {
        
        body.style.backgroundColor = "rgb(255, 235, 235)";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "rgb(30, 30, 30)";
        body.style.color = "white";
    }
}

let boton = document.getElementById("botonTravieso");

boton.addEventListener("mouseover", function() {
    // Obtener dimensiones de la ventana
    let anchoVentana = window.innerWidth - boton.offsetWidth;
    let altoVentana = window.innerHeight - boton.offsetHeight;

    // Generar posición aleatoria dentro de la ventana
    let nuevaX = Math.floor(Math.random() * anchoVentana);
    let nuevaY = Math.floor(Math.random() * altoVentana);

    // Aplicar nueva posición
    boton.style.left = nuevaX + "px";
    boton.style.top = nuevaY + "px";
});
