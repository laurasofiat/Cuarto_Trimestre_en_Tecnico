// Cargar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar productos
function agregarProducto(nombre, precio) { // Recibe el nombre y precio del producto

    let producto = {  // Crea un objeto producto con el nombre y precio
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto); //Agrega el producto al carrito

    localStorage.setItem("carrito", JSON.stringify(carrito)); // 

    mostrarCarrito();

    console.log(carrito);
}

// Mostrar carrito en pantalla
function mostrarCarrito() {

    let lista = document.getElementById("listaCarrito"); //Crea una lista la cual obtiene del HTML para mostrar los productos del carrito
    let total = 0; // Variable para calcular el total del carrito

    lista.innerHTML = ""; //si la lista está vacía

    for (let i = 0; i < carrito.length; i++) { // recorre con for, cuenta el número de productos en el carrito y los muestra en la lista

        let item = document.createElement("li"); // Crea un elemento de lista para cada producto en el carrito

        item.innerHTML = carrito[i].nombre +  // Muestra el nombre del producto seguido de su precio
        " - $" + carrito[i].precio + 
        " <button onclick='eliminarProducto(" + i + ")'>Eliminar</button>";     // Agrega un botón para eliminar el producto, pasando el índice del producto en el carrito 

        lista.appendChild(item); //agrega el elemento de la lista al elemento padre (la lista)

        total += Number(carrito[i].precio); // en el total suma la cantidada del precio   
    }

    document.getElementById("total").textContent = total;
}

// Mostrar carrito al cargar la página
mostrarCarrito();


//Eliminar Productos

function eliminarProducto (indice) {
    carrito.splice(indice, 1); // Elimina producto de acuerdo al índice
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza el carrito en localStorage
    mostrarCarrito(); // Actualiza la visualización del carrito
}
