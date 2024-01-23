/* let total = 0;

for (let i=1; i<=10; i++) {
    total += i;
    //total = total + i; // Es igual, es equivalente
}

console.log("Total: " + total);
 */

// Abstracción
/* function sumarRango(valorInicial, valorFinal) {
    let total = 0;

    for (let i=valorInicial; i<=valorFinal; i++) {
        total += i;
    }
    
    return total;
}

console.log("Total: " + sumarRango(1, 10));
console.log("Total: " + sumarRango(10, 20));
console.log("Total: " + sumarRango(1, 5)); */


// Funciones de Orden Superior
/* function mayorQue(n) {
    return m => m > n;
}

let mayorQueDiez = mayorQue(10); // m => m > 10
let mayorQueOnce = (valor) => { // función flecha o arrow function
    if (valor > 11) {
        return true
    } else {
        return false;
    }
}

console.log(mayorQueDiez(12)); // (12) => 12 > 10 ==> true 
console.log(mayorQueDiez(5)); // (5) => 5 > 10 ==> false
console.log(mayorQueDiez(25)); // (25) => 5 > 10 ==> true
console.log("Mayor que once: " + mayorQueOnce(25)); // (255) => 5 > 10 ==> true */

/* function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    } else {
        return "Operación desconocida!";
    }
}

const sumar = asignarOperacion("sumar"); // (a, b) => a + b;
const restar = asignarOperacion("restar"); // (a, b) => a - b
console.log("Suma: " + sumar(10, 20));  // (10, 20) => 10 + 20 => 30
console.log("Resta: " + restar(40, 20)); // (40, 20) => 40 - 20 => 20 */


// Retornar funciones como parámetro
function porCadaUno(unArray, unaFuncion) {
    for (elemento of unArray) {
        unaFuncion(elemento);
    }
}

const numeros = [50, 1, 5, 20, 10];
const nombres = ["Fabio", "Tamara", "Enzo", "Lautaro", "Daiana"];

//porCadaUno(numeros, console.log);

// Declaro la función acumular
/* let total = 0;

function acumular(valor) {
    total += valor;
}

porCadaUno(numeros, acumular);
console.log("Total: " + total);

porCadaUno(nombres, console.log); */


// Definimos un Array vacío
/* const duplicados = [];

porCadaUno(numeros, (elemento) => {
    duplicados.push(elemento * 2);
});

console.log(duplicados); */


// Métodos de búsqueda y transformación
// forEach => recorrer un array
/* let total = 0;

numeros.forEach(valor => {
    total += valor * 2;
})

console.log("Total: " + total); */

/* for (let i=0; i<nombres.length; i++) {
    console.log(nombres[i]);
} */

// Aclaración
//for in => para recorrer objetos
//for of => para recorrer arrays

// Find => busca el primer elementos que coincida con la condición, y sino devuelve undefined
/* let numeroBuscado = numeros.find(item => item == 500);
let nombreBuscado = nombres.find(item => item == "Lionel");

if (numeroBuscado) {
    console.log("Se encontró el número");
} else {
    console.log("No se encontró el número!");
}

if (nombreBuscado) {
    console.log("Se encontró el nombre");
} else {
    console.log("No se encontró el nombre!");
} */

const productos = [
    {id:1, nombre:"KALU NEGRO", precio:48000, categoria:"sandalias"},
    {id:2, nombre:"KENDRICK PELTRE", precio:56000, categoria:"sandalias"},
    {id:3, nombre:"KENDRICK NEGRO", precio:38000, categoria:"sandalias"},
    {id:4, nombre:"AGUS NEGRO", precio:63000, categoria:"zapatos"}
];

/* console.log(productos);
let producto1 = productos.find(prod => prod.id == 2); //Busque por Id
console.log(producto1);
let producto2 = productos.find(prod => prod.nombre == "KENDRICK NEGRO"); //Busque por Nombre
console.log(producto2);
let producto3 = productos.find(alejandro => alejandro.precio >= 57000 && alejandro.precio <= 60000); //Busque por Precio
console.log(producto3); */

// Filter => Filtra un array y devuelve un nuevo array resultante, en caso de que no coincida deveulve un array vacío
/* const productosPremium = productos.filter(item => item.precio > 56000);
console.log(productosPremium); */
/* const productosPremium = productos.filter(item => item.nombre.includes("KENDRICK"));
console.log(productosPremium); */

/* const productos2 = productos.filter(item => item.categoria == "zapatos" || item.categoria == "sandalias");
console.log(productos2); */

// Some => Devuelve (true si se encuentra, false si no encuentra) un elemento en el array 
/* const producto = productos.some(item => item.precio == 80000);
console.log(producto); */

// Map => Genera un nuevo array con los valores que nosotros definamos
/* const productosConRecargo = productos.map(item => ({id:item.id, nombre:item.nombre.toLowerCase(), precio:item.precio * 1.20}));
console.log(productosConRecargo); */

// Reduce => Devuelve un solo valor recorriendo todos los elementos de un array
/* const sumaTotalProductos = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(sumaTotalProductos); */

// Sort => Ordena un array
/* numeros.sort((a, b) => a - b); //ordeno en forma ascendente
numeros.sort((a, b) => b - a); //ordeno en forma descendente
console.log(numeros);

productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    
    if (a.precio < b.precio) {
        return -1;
    }

    return 0;
});
console.log(productos); */