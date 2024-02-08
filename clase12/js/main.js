// Sugar Syntax
let numero = 10;
/* // Opcion #1
numero = numero + 10;
console.log(numero); */
/* // Opcion #2
numero += 20;
console.log(numero); */
// Opcion #3
/* numero++;
console.log(numero); */

// Operador Ternario
let temperatura = 32;

/* if (temperatura > 30) {
    console.log("Hace calor");
} else {
    console.log("Está lindo");
} */

// Versión simplificada con operador ternario
//temperatura > 30 ? console.log("Hace calor") : console.log("Está lindo");

/* if (temperatura > 30) {
    console.log("Hace calor");
} else if (temperatura > 20) {
    console.log("Está lindo");
} else {
    console.log("Esta fresco");
} */

// Versión simplificada con operador ternario
/* temperatura > 30 ? console.log("Hace calor") : temperatura > 20 ? console.log("Está lindo") : console.log("Esta fresco"); */

// Ejemplo de Operador Ternario
let permiso;
const usuario = {
    nombre:"Diego Torres",
    edad:22
}

/* if (usuario.edad >= 18) {
    permiso = true;
} else {
    permiso = false;
}

if (permiso) {
    console.log("Podes tomar alcohol!");
} else {
    console.log("DENEGADO! LLAMAREMOS A LA POLICIA!!!");
} */

// Simplificando con Operador Ternario
/* permiso = usuario.edad >= 18 ? true : false;
permiso ? console.log("Podes tomar alcohol!") : console.log("DENEGADO! LLAMAREMOS A LA POLICIA!!!"); */
// Versión super simplificada
/* console.log(usuario.edad >= 18 ? "Podes tomar alcohol!" : "DENEGADO! LLAMAREMOS A LA POLICIA!!!"); */

// Ejemplo aplicado en HTML
/* let resultado = document.getElementById("resultado");
permiso = usuario.edad >= 18 ? true : false;
resultado.innerHTML = `<div class="alert ${permiso ? "alert-success" : "alert-danger"}" role="alert">${permiso ? "Podes tomar alcohol!" : "DENEGADO! LLAMAREMOS A LA POLICIA!!!"}</div>`; */


// Operador Lógico AND (solo ejecuta el segundo operando si la condición es VERDADERA)
const carrito = [];

/* if (carrito.length === 0) {
    console.log("El carrito está vacío!");
} */

//carrito.length ===  0 && console.log("El carrito está vacío!");


// Operador Lógico OR (ejecuta el primer o segundo operando)
/* console.log( 0 || "Falsy")  // Falsy
console.log( -20 || "Falsy")  // -20
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( "true" || "Falsy")  // true (como string)
console.log( false || "Falsy")  // Falsy
console.log( "false" || "Falsy")  // False (como string)
console.log( {} || "Falsy")  // Objeto vacío
console.log( [] || "Falsy")  // Array vacío */

/* const usuario2 = null;

console.log(usuario || "El usuario es inválido!");
console.log(usuario2 || "El usuario2 es inválido!"); */


// Operador Nullish (funciona similar al OR pero es un poco más permisivo en las validaciones)

/* console.log( 0 ?? "Falsy")  // 0
console.log( -20 ?? "Falsy")  // Falsy
console.log( 40 ?? "Falsy")  // 40
console.log( null ?? "Falsy")  // Falsy
console.log( undefined ?? "Falsy")  // Falsy
console.log( "Hola Mundo" ?? "Falsy")  // Hola Mundo
console.log( "" ?? "Falsy")  // Empty String
console.log( NaN ?? "Falsy")  // Falsy
console.log( true ?? "Falsy")  // true
console.log( "true" ?? "Falsy")  // true (como string)
console.log( false ?? "Falsy")  // Falsy
console.log( "false" ?? "Falsy")  // False (como string)
console.log( {} ?? "Falsy")  // Objeto vacío
console.log( [] ?? "Falsy")  // Array vacío */

// Acceso condicional a un Objeto
/* const usuario3 = null;

//console.log(usuario3.nombre || "Usuario inválido!"); // Revienta acá
console.log(usuario3?.nombre || "Usuario inválido!"); */


// Desestructuración
const producto = {
    id:1,
    nombre:"Coca Cola",
    precio:2500
}

const productos = [
    {id:1, nombre:"Coca Cola", precio:2500},
    {id:2, nombre:"Pepsi", precio:2400}
];

/* let id = producto.id;
let nombre = producto.nombre;
let precio = producto.precio; */
//let {nombre, precio} = producto[1]; //Desestructurar un objeto, las nombres de las variables deben coincidiir con los nombres de las propiedades del objeto
//console.log(nombre + " - $" + precio);

/* let {nombre, precio} = productos[1];
console.log(nombre + " - $" + precio); */

/* for (const prod of productos) {
    let {nombre, precio} = prod;
    console.log(nombre + " - $" + precio);
} */


// Desestrucutando un Objeto con otro Objeto dentro
/* const usuario2 = {
    nombre:"John Edward Gonzalez",
    edad:25,
    telefono:{
        celular:1122334455,
        email:"john.gonzalez@gmail.com"
    }
}

let {nombre, telefono:{celular, email}} = usuario2; // Acceder a una propiedad de un objeto de tiene una propiedad
console.log(nombre);
console.log(celular);
console.log(email); */


// Alias (ponerle nombre asociado a un nombre de propiedad de un objeto)
/* const item = {
    itemId:1,
    itemName:"Coca Cola",
    itemPrice:2500
}

const {itemName:nombre, itemPrice:precio} = item;
console.log(`${nombre} $${precio}`); */


// Desestructuración desde parámetros
const curso = {
    id:1,
    nombre:"JavaScript",
    precio:150000
}

// Función original
/* const desestructurar = (valor) => {
    let {nombre, precio} = valor; //Desestructuro exactamente aquí
    console.log(nombre + "- $" + precio);
} */

// Función Mejorada con desestructuración por parámetro
/* const desestructurar = ({nombre, precio}) => {
    console.log(nombre + "- $" + precio);
}

desestructurar(curso); */


// Desestructuración de Arrays
const nombres = ['Ben', 'Mateo', 'John', 'Magalí', 'Lucía', 'Solange'];
console.log(nombres);
let [nombre1, nombre2, nombre3] = nombres; //Acceder a los 3 primeros nombres
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
let [,,,nombre4, nombre5, nombre6] = nombres; //Accedo a los últimos 3 nombres
console.log(nombre4);
console.log(nombre5);
console.log(nombre6);
let [,,nombre10,,nombre11] = nombres;
console.log(nombre10);
console.log(nombre11);
console.log(nombres[nombres.length-1]); //Acceder al valor por su posición
