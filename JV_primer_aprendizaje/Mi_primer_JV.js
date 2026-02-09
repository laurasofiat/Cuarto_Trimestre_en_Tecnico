// CALCULADORA BÁSICA DE PROMEDIO DE NOTAS
// Mostramos un mensaje de bienvenida
alert("Bienvenido a la calculadora de notas");
// Pedimos el nombre del aprendiz
let nombre = prompt("¿Cuál es tu nombre?");
// Convertimos las notas a número
let nota1 = Number(prompt("Ingresa la nota 1"));
let nota2 = Number(prompt("Ingresa la nota 2"));
let nota3 = Number(prompt("Ingresa la nota 3"));
// Calculamos el promedio
let promedio = (nota1 + nota2 + nota3) / 3;
// Mostramos el resultado
alert("Aprendiz " + nombre + ", tu promedio es: " + promedio);
// Tomamos una decisión
if (promedio >= 3) {
 alert("¡Aprobaste!");
} else {
 alert("Debes mejorar.");
} 

// Fin del programa
