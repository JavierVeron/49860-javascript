
// Método de Strings
/* let texto = "Hola Mundo!";
console.log(texto);
console.log(typeof texto);
// Length => Devuelve la cantidad de caracteres que tiene un string
let texto2 = "hola";
console.log(texto2.length);
let texto3 = 'Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadoestadounidense. Es también internacional con la selección de Argentina, de la que es capitán. Con el Fútbol Club Barcelona, al que estuvo ligado más de veinte años, ganó 35 títulos, entre ellos, diez de La Liga, cuatro de la Liga de Campeones de la UEFA y siete de la Copa del Rey.';
console.log(texto3.includes("35"));
console.log(texto3.indexOf("Messi")); */

// Objeto Math
/* console.log(Math.E);
console.log(Math.PI); */

// Método de Math
// Max y Min
/* console.log("Máx: " + Math.max(10, 5, 0, -90, 50));
console.log("Mín: " + Math.min(10, 5, 0, -90, 50));
console.log("Max: " + Math.max(10, 5, Infinity, -90, 50));
console.log("Mín: " + Math.min(10, 5, 0, -90, 50, -Infinity)); */

// Ceil, Floor y Round
/* const peso = 84.5;
console.log("Ceil: " + Math.ceil(peso)); // Redondea para arriba
console.log("Floor: " + Math.floor(peso)); // Redondea para abajo
console.log("Round: " + Math.round(peso)); // Redondea para arriba a partir de .5 */

// Square Root (raíz cuadrada)
/* console.log("x9 => " + Math.sqrt(9));
console.log("x81 => " + Math.sqrt(81));
console.log("x36 => " + Math.sqrt(36));
console.log("x25 => " + Math.sqrt(25)); */
// Raíz cúbica
/* console.log("x125 => " + Math.cbrt(125));
console.log("x64 => " + Math.cbrt(64)); */

// Random => Genera número aleatorios entre 0 y 1
/* let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
console.log("Número aleatorio del 0 al 10: " + Math.round(numeroAleatorio * 10));
console.log("Número aleatorio del 0 al 100: " + Math.round(Math.random() * 100));
console.log("Número aleatorio del 50 al 120: " + Math.round(Math.random() * 70 + 50)); */

/* const generadorDeNumeros = (tope) => {
    return Math.floor(Math.random() * tope) + 1;
}

const productos = ["iPhone 15 Pro", "PlayStation 5", "Viaje a Disney", "Cafetera Nespresso"];

let numeroSorteado = generadorDeNumeros(productos.length)
console.log("Número Sorteado: " + numeroSorteado);
console.log("Te Ganaste: " + productos[numeroSorteado-1]); */

// Clase Date
/* const fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getFullYear()); */

/* let nuevaFecha = new Date(2023, 11, 25); //Definir una fecha con año, mes y día
console.log(nuevaFecha);
let nuevaFecha2 = new Date(2023, 11, 25, 0, 2, 15); //Definir una fecha con año, mes, día, hora y miuto
console.log(nuevaFecha2);
let nuevaFecha3 = new Date("June 20, 2022 20:30:15"); 
console.log(nuevaFecha3); */

let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1;
let anio = fechaActual.getFullYear();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
let fechaObtenida = dia + "-" + mes + "-" + anio + " " + hora + ":" + minutos + ":" + segundos;
//alert(fechaObtenida);
console.log(fechaObtenida);

// DOM (adelanto)
/* let titulo = document.getElementById("titulo");
titulo.innerHTML = "Lionel Messi";
let contenido = document.getElementById("contenido");
contenido.innerHTML = "Lionel Andrés Messi Cuccittini (Rosario, 24 de junio de 1987), conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadoestadounidense. Es también internacional con la selección de Argentina, de la que es capitán.";
contenido.innerHTML += "Con el Fútbol Club Barcelona, al que estuvo ligado más de veinte años, ganó 35 títulos, entre ellos, diez de La Liga, cuatro de la Liga de Campeones de la UEFA y siete de la Copa del Rey.";
contenido.innerHTML += "Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,9​ es el único futbolista en la historia que ha ganado, entre otras distinciones, ocho veces el Balón de Oro, ocho premios de la FIFA al mejor jugador del mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol. En 2020, se convirtió en el primer futbolista y el primer argentino en recibir un premio Laureus y fue incluido en el Dream Team del Balón de Oro.";
let imagen = document.getElementById("imagen");
imagen.src = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3125544effd09308/639f60c65d0ea95c1ee0e6c3/GettyImages-1450106798.jpg?auto=webp&format=pjpg&width=3840&quality=60";
imagen.className = "img-fluid"; */

/* let pepe = document.getElementById("contenido");
pepe.innerHTML = fechaActual.toDateString();
pepe.innerHTML = fechaActual.toLocaleString();
pepe.innerHTML = fechaActual.toLocaleDateString();
pepe.innerHTML = fechaActual.toTimeString(); */


// Calculo de Fechas
/* let cumpleJoel = new Date(2024, 1, 5);
console.log(cumpleJoel);
let diferencia = cumpleJoel - fechaActual;
console.log(diferencia);
let miliSegundosPorDia = 60 * 60 * 24 * 1000;
let dias = Math.ceil(diferencia / miliSegundosPorDia);
console.log(dias);

let contenido = document.getElementById("contenido");
let nombre = "Joel";
document.getElementById("contenido").innerHTML = "<h1 class='text-uppercase'>" + nombre + "</h1>";
contenido.innerHTML += "<h2 class='text-uppercase'>FALTAN " + dias + " días para tu cumpleaños!</h2>";  */


// Calculo que procesamiento
let inicio = new Date();

for (let i=0; i<100000; i++) {
    console.log("Haciendo tiempo...");
}

let final = new Date();
let resultado = Math.round((final - inicio) / 1000);
let contenido = document.getElementById("contenido");
contenido.innerHTML = "El proceso tardó: " + resultado + " segundos!";