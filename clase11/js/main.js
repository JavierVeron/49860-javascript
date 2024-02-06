// Como declaramos una localStorage
/* localStorage.setItem('curso', 'Curso de Desarrollo Web');
localStorage.setItem('sosFeliz', true);
localStorage.setItem('edad', 23);
localStorage.setItem('curso', 'Curso de JavaScript'); // Creo nuevamente o "reemplazo" el valor que estaba antes */


// Como obtener una localStorage - Las localStorage almacenen los datos en forma texto
/* let curso = localStorage.getItem('curso');
console.log(curso);
document.getElementById("curso").value = curso;
let sosFeliz = localStorage.getItem('sosFeliz');
let edad = localStorage.getItem('edad');
console.log(sosFeliz);
console.log(true);
console.log(edad);
console.log(23); */


// Otra forma de acceder a las localStorages
/* localStorage.setItem('curso', 'Curso de Desarrollo Web');
console.log(localStorage.curso); //Accedo a una localStorage como si fuera un objeto
localStorage.curso = 'Curso de JavaScript'; //Editar o pisar el valor de la localStorage
console.log(localStorage.curso);
localStorage.curso2 = 'Curso de React JS'; // Crear la localStorage curso2
console.log(localStorage.curso2); */

// Como declaramos una sessionStorage => Funciona igual que las localStorage solamente que su persistencia es hasta que se cierre la pestaña o el navegador
/* sessionStorage.setItem('curso', 'Curso de Desarrollo Web');
sessionStorage.setItem('sosFeliz', true);
sessionStorage.setItem('edad', 23);
sessionStorage.setItem('curso', 'Curso de JavaScript'); */


// Como recorrer las Clases (Keys) de una localStorage/sessionStorage
//console.log("localStorages en mi Navegador: " + localStorage.length); //Cantidad de localStorage que tengo
/* for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log(`Clave: ${clave} - Valor: ${localStorage.getItem(clave)}`);
} */


// RemoveItem y Clear para localStorages o sessionStorages
// Eliminando una localStorage en particular
/* sessionStorage.setItem('curso', 'Curso de JS');
localStorage.removeItem('bebida');
localStorage.removeItem('bebidas');
sessionStorage.removeItem('curso');
localStorage.clear(); // Elimina TODAS las localStorages
sessionStorage.clear(); // Elimina TODAS las sessionStorages */


// Qué pasaría si almaceno un objeto o array en una localStorage? - Si no parseamos nos guarda el objeto o array en formato texto
/* let bebida = {id:1, nombre:"Coca Cola", precio:1200};
let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1200},
    {id:2, nombre:"Pepsi", precio:1100},
    {id:3, nombre:"Manaos", precio:900}
]
console.log(bebida);
localStorage.setItem("bebida", bebida);
localStorage.setItem("bebidas", bebidas);
let bedidaLS = localStorage.getItem("bebida");
console.log(bedidaLS); */


// Como definir un JSON => Hay que convertir con el método JSON.stringify() y Parsear con el método JSON.parse()
/* let bebida = {id:1, nombre:"Coca Cola", precio:1200};
console.log(bebida);
localStorage.setItem('bebida', JSON.stringify(bebida)); // Almacenar un objeto convirtiendo a JSON con JSON.stringify()
localStorage.setItem('bebida2', JSON.stringify({id:2, nombre:'Pepsi'}));
let bebidaLS = JSON.parse(localStorage.getItem('bebida')); // Recuperar un dato almacenadado en una localStorage y parseandolo para obtener su valor original
let bebidaLS2 = JSON.parse(localStorage.getItem('bebida2'));
console.log(bebidaLS);
console.log(bebidaLS2);

let bebidas = [
    {id:1, nombre:"Coca Cola", precio:1200},
    {id:2, nombre:"Pepsi", precio:1100},
    {id:3, nombre:"Manaos", precio:900}
]
localStorage.setItem('catalogo', JSON.stringify(bebidas));
let catalogo = JSON.parse(localStorage.getItem('catalogo'));
console.log(catalogo);
let sosFeliz = true;
let edad = 23;
localStorage.setItem('sosFeliz', JSON.stringify(sosFeliz));
localStorage.setItem('edad', JSON.stringify(edad));
let sosFelizLS = JSON.parse(localStorage.sosFeliz);
let edadLS = JSON.parse(localStorage.edad);
console.log(sosFelizLS);
console.log(edadLS); */



// Ejemplo aplicado => Objetivo: Crear un formulario para guardar información de un producto en un array de productos almacenados en una localStorage y renderizar cada producto agregado.

class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
    
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function recuperarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
} 

function renderProductos() {
    let productos = recuperarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3">
        <div class="card text-center">
        <img src="${producto.imagen}" class="img-fluid">
        <div class="card-body">
          <p class="card-text">${producto.nombre}</p>
          <p class="card-text">$${producto.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.getElementById('resultado').innerHTML = contenido;
}

function guardarDatos() {
    let valorNombre = document.getElementById("nombre").value;
    let valorPrecio = document.getElementById("precio").value;
    let valorImagen = document.getElementById("imagen").value;

    //console.log(valorNombre + " - " + valorPrecio + " - " + valorImagen);
    let nuevoProducto = new Producto(valorNombre, valorPrecio, valorImagen); // Crear un nuevo Producto con los datos ingresados del Formulario
    nuevoProducto.sumaIva();
    //console.log(nuevoProducto);

    let productos = recuperarProductosLS(); // Recupero mi Array de Productos;
    productos.push(nuevoProducto);
    //console.log(productos);

    guardarProductosLS(productos); // Guardar el producto en la localStorage
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se guardaron correctamente!</div>`; // Imprimo el mensaje
}

function eliminarDatos() {
    localStorage.removeItem("productos"); // Eliminar la localStorage productos
    document.getElementById('resultado').innerHTML = `<div class="alert alert-success" role="alert">Los datos se eliminaron correctamente!</div>`;
}

document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos);
document.getElementById("btnRecuperarDatos").addEventListener("click", renderProductos);
document.getElementById("btnEliminarDatos").addEventListener("click", eliminarDatos);