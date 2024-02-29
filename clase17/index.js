/* let mensaje = "Hola Coders!";
let curso = "JavaScript";
let salida = `${mensaje} Estamos cursando la última clase de ${curso}`;
console.log(salida); */

const productos = [
    {id:1, nombre:"Coca Cola", precio:1400},
    {id:2, nombre:"Pepsi", precio:1700},
    {id:3, nombre:"Manaos", precio:1000}
];

let producto = productos.find(item => item.precio >= 1000 && item.precio <=1300);

console.log(producto);