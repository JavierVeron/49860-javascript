// Operador Spread
//const nombres = ["Manuel", "Julieta", "Mateo", "Ben"];
//console.log(nombres);
/* let valor1 = 10; 
let valor2 = valor1; // Una variable con un valor por copia
valor1 = 50;
valor2 = 30;
let nombres2 = nombres; // Una variable con un valor por referencia (pasa en objetos y arrays)
nombres[0] = "Juan";
console.log(valor1); //20
console.log(valor2); //10
console.log(nombres);
console.log(nombres2); */

/* let nombres3 = [];
let nombres4 = nombres.concat(nombres3); // Crear un nuevo array a partir de 2 arrays concatenados
nombres4[0] = "Karim";
//console.log(nombres4);

const nombres5 = [...nombres];
nombres5[1] = "Fabio";
console.log(nombres);
console.log(nombres5); */

// Operador Spread para buscar máximos o mínimos
/* const numeros = [20, 10, 50, 0, -20];
console.log("Máx: " + Math.max(...numeros));
console.log("Mín: " + Math.min(...numeros));
//console.log("Máx: " + Math.max(20, 10, 50, 0, -20)); */


// Operador Spread con Arrays
/* const nombres = ["Manuel", "Julieta", "Mateo", "Ben"];
const nombres2 = [...nombres];
nombres[0] = "Ana";
nombres2[0] = "Laura";
console.log(nombres);
console.log(nombres2); */

// Operador Spread con Objetos
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:1400};
const bebida2 = bebida1; // Creo la referencia a ese objeto
bebida1.precio = 1500;
console.log(bebida1);
console.log(bebida2);
const bebida3 = {...bebida1};
bebida3.precio = 2000;
bebida2.precio = 1300;
console.log(bebida1);
console.log(bebida2);
console.log(bebida3);
const bebida4 = {nombreCorto:"Coca", ...bebida1, id:20, categoria:"bebidas"};
console.log(bebida4); */

// Ejemplos con Arrays
/* const nombresHombres = ["Juan", "Fabio", "Alejandro"];
const nombresMujeres = ["Agostina", "Laura"];
const nombresHyM = [...nombresMujeres, ...nombresHombres];
console.log(nombresHyM); */

// Ejemplos con Objetos
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:1400};
const descripcionBebida1 = {nombreCorto:"Coca", precio:2000, categoria:"Bebidas"};
console.log(bebida1);
console.log(descripcionBebida1);
const bebida1Completo = {...bebida1, ...descripcionBebida1};
console.log(bebida1Completo); */

// Agregando un array en un objeto con Spread
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:1400};
const keywordsBebida1 = ["coca", "coca cola", "coke", "coca original"];
const bebida1Completo = {...bebida1, keywords:[...keywordsBebida1]};
console.log(bebida1Completo); */


// Rest parameters
/* const sumar = (...numeros) => {
    //console.log(numeros);
    console.log(numeros.reduce((acumulador, item) => acumulador+= item, 0));
}

sumar(20, 10);
sumar(20, 10, 50);
sumar(20, 10, 50, 20, 20, 30); */