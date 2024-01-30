// Accediendo a Nodos
//console.log(document.body);
//console.log(document.head);

// Como acceder/modificar elementos html desde los nodos
/* console.log(document.body.children[1]);
console.log(document.body.children[1].children[0]);
document.body.children[1].children[0].innerHTML = "React JS";
console.log(document.body.children);
document.body.children[0].innerText = "Leonela <span style='color:red;'>Arciprete</span>"; // Reemplazo el contenido en formato texto PLANO
document.body.children[0].innerHTML = "Leonela <span style='color:red;'>Arciprete</span>"; // Reemplazo el contenido en formato texto HTML */

// getElementById => Acceder al ELEMENTO HTML por su ID
/* let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.innerHTML = "Curso de React en Coderhouse";
document.getElementById("parrafo").innerHTML = "Hola a Todos!!!";

let contenido = document.getElementById("contenido");
contenido.innerHTML = '<div class="alert alert-primary" role="alert">Un texto de prueba!</div>'; */

// getElementsByClassName => Accedo a ELEMENTOS HTML por su Nombre de Clase
/* let listaPaises = document.getElementsByClassName("paises");
console.log(listaPaises);
console.log(listaPaises[0]);
listaPaises[0].innerHTML = "USA"; */

// getElementsByTagName => Accedo a ELEMENTOS HTML por su Nombre de Etiqueta
/* let itemPaises = document.getElementsByTagName("li");
console.log(itemPaises);
console.log(itemPaises[0]);
itemPaises[2].innerHTML = "USA";

let listaPais = document.getElementsByTagName("ul");

for (const pais of listaPais) {
    pais.className = "list-group"
}

for (const pais of itemPaises) {
    pais.className = "list-group-item";
    //console.log(pais.innerText);
} */

// Modificando Nodos
/* let paises = document.getElementById("paises");
console.log(paises.innerText);
paises.innerHTML = '<button type="button" class="btn btn-primary">' + paises.innerText + '</button>'; */

/* let contenido = document.getElementById("contenido");
contenido.innerHTML = "Curso de JavaScript!"; */

// Modificar la ruta de una imagen a una etiqueta img
/* let imagen = document.getElementById("imagen");
console.log(imagen);
imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/150px-Rihanna_Fenty_2018.png";
document.getElementById("imagen").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/150px-Rihanna_Fenty_2018.png"; // Es equivalente */


// Creando/Eliminando Nodos
/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Curso de JavaScript";
let parrafo2 = document.createElement("p");
parrafo2.innerHTML = "Curso de React JS";
let parrafo3 = document.createElement("p");
parrafo3.innerHTML = "Curso de Desarrolo Web";
console.log(parrafo);
document.body.append(parrafo);
document.body.append(parrafo2);
document.body.prepend(parrafo3); */

/* let contenido = document.getElementById("contenidoMB");
let textoNuevo = document.createElement("p");
textoNuevo.innerHTML = "Durante su infancia, Becerra se crio en una casa de Quilmes rodeada de música. Ahí sonaban clásicos del rock como Creedence y Pink Floyd, por su padre, que cantaba y tocaba la guitarra, pero también Mariah Carey, Whitney Houston, Marco Antonio Solís y Luis Miguel, por su madre.7​ Pese a esto, Becerra destacó a su madre como su mayor influencia y, añadió, «Mi mamá siempre fue más del palo artístico, toda su vida quiso ser bailarina, le encanta lo teatral, el canto, la música. Ella me inculcó mucho esto».13​ Por otro lado, afirmó que obtuvo influencias del rap, trap y hip hop por su hermano mayor Juan, quién le hizo escuchar a, entre otros, Wiz Khalifa, Mac Miller y Snoop Dogg.16​";
textoNuevo.className = "border";
contenido.appendChild(textoNuevo);
//textoNuevo.remove(); //Elimina dicho Nodo por su ID

console.log(contenido);
contenido.children[3].remove(); // Elimina el elemento accediendo desde el Nodo */

// Accediendo a valores de campo de texto
/* let nombre = document.getElementById("nombre");
console.log(nombre);
nombre.value = "Bizarrap";

if (nombre.value == "") {
    console.log("Error! El campo nombre está vacío!");
} */


// Iterando arrays
/* let infusiones = ["Té", "Café", "Mate", "Chocolatada", "Fernet"];
let listaInfusiones = document.getElementById("infusiones");

for (const item of infusiones) {
    let elemento = document.createElement("li");
    elemento.innerHTML = item;
    listaInfusiones.appendChild(elemento);
} */


// Plantillas de texto o Template Strings
/* let producto = {id:1, nombre:"Coca Cola", precio:1200};
//console.log("Producto: " + producto.nombre + "\n" + " $" + producto.precio); // Concatenando variables y texto
console.log(`Producto: ${producto.nombre}
--
Un texto cualquiera
--
$${producto.precio}`); // Template Strings

document.getElementById("contenido2").innerHTML = `<p>Producto: ${producto.nombre.toUpperCase()}</p>
<h3>Un texto cualquiera</h3>
<b>$${producto.precio * 1.2}</b>`; */


// Render de Productos
/* const productos = [
    {id:1, nombre:"McNifica", calorias:513, precio:4550, imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar"},
    {id:2, nombre:"McPollo", calorias:353 , precio:3250, imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXQzmQj/200/200/original?country=ar"},
    {id:3, nombre:"Papas pequeñas", calorias:500, precio:1650, imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUUjwZ/200/200/original?country=ar"},
    {id:4, nombre:"Papas grandes", calorias:700, precio:1900, imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar"}
];

let contenidoProductos = document.getElementById("contenidoProductos");

for (const produ of productos) {
    let elemento = document.createElement("div");
    elemento.className = "col-md-3 my-5";
    elemento.innerHTML = `<div class="card border-0">
        <img src="${produ.imagen}" class="card-img-top" alt="${produ.nombre}">
        <div class="card-body text-center">
            <p class="card-text">${produ.nombre}</p>
            <p class="card-text">${produ.calorias} kcal</p>
            <p class="card-text"><b>$${produ.precio}</b></p>
        </div>
    </div>`;
    contenidoProductos.appendChild(elemento); // Agrego el nodo hijo creado al padre
} */


// Query Selector
//let listaPaises = document.getElementsByClassName("paises"); // No me sirve
//let listaPaises = document.querySelector("#contenidoMB li"); // Trae el primer elemento
let listaPaises = document.querySelectorAll("#contenidoMB li"); // Trae todos los elementos
console.log(listaPaises);

