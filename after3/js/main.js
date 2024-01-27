// Definir un Array de Productos
const productos = [
    {id:1, nombre:"McNifica", calorias:513, precio:4550},
    {id:2, nombre:"McPollo", calorias:353 , precio:3250},
    {id:3, nombre:"Papas pequeñas", calorias:500, precio:1650},
    {id:4, nombre:"Papas grandes", calorias:700, precio:1900},
    {id:5, nombre:"Coca Cola Chica", calorias:185, precio:1300},
    {id:6, nombre:"Coca Cola Grande", calorias:359, precio:1700},
    {id:7, nombre:"Sundae de Dulce de Leche", calorias:257, precio:1900},
    {id:8, nombre:"McFlurry Oreo", calorias:424, precio:2650}
]

// Defino la clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.maxProductosParaDescuento = 3;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);
        console.log(producto);

        if (producto) {
            this.productos.push(producto);
            console.log("Agregaste el Producto #" + id + " al Carrito!");
        } else {
            console.log("No se encontró el Producto con #" + id + "!");
        }
    }

    listarCarrito() {
        let salida = "";
    
        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
        })
    
        return salida;
    }

    calcularTotalProductos() {
        return this.productos.length;
    }

    aplicarDescuento() { //Si tengo 3 o más productos en mi Carrito, aplico un descuento
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(item => {
           total += item.precio;
        });

        return total;
        
        // Modo difícil
        //return this.productos.reduce((acumulador, item) => acumulador += item.precio, 0);
    }
}

function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    })

    return salida;
}

/* const carrito = new Carrito();
carrito.agregarProducto(2);
carrito.agregarProducto(2);
carrito.agregarProducto(3);
carrito.agregarProducto(5);
carrito.listarCarrito();
console.log("Total de Elementos de mi Carrito: " + carrito.calcularTotalProductos());
let totalCompra = carrito.calcularSumaTotalProductos();
let aplicarDescuento = carrito.aplicarDescuento();
console.log("Total de la Compra: $" + totalCompra);
console.log("Descuento: $" + aplicarDescuento);
let totalFinal = totalCompra - aplicarDescuento;
console.log("Final: $" + totalFinal); */


// Ejecuto mi Programa
const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);






// REPASO
/* console.log("Nombre: " + productos[0].nombre + " $" + productos[0].precio);
// Busco un elemento en mi Array
let producto = productos.find(item => item.id === 3);
console.log(producto.nombre + " (" + producto.calorias + " kcal)"); */

// Agregar nuevo producto
/* let nuevoProducto = {id:9, nombre:"McNuggets 6 unidades", calorias:238, precio:2450};
console.log(nuevoProducto);
let productoEliminado = productos.shift();
console.log(productos);
console.log(productoEliminado); */