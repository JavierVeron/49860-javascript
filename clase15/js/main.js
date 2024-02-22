/* function ejecutarAsincronia() {
    setTimeout(() => {
        document.getElementById("btnEjecutar").className = "btn btn-success";
        document.getElementById("btnEjecutar").innerHTML = "Proceso Ejecutado!";
        document.getElementById("resultado").innerHTML = "<p><b>Hola Coders!</b></p>";
    }, 2000);
}

document.getElementById("btnEjecutar").addEventListener("click", ejecutarAsincronia); */


// Proceso sincrónico vs asincrónico
/* console.log("Inicia el proceso!");

setTimeout(() => {
    console.log("Estoy en la mitad del proceso #1!");
}, 2000);

setTimeout(() => {
    console.log("Estoy en la mitad del proceso #2!");
}, 1000);

console.log("Fin del proceso!"); */


// Otro ejemplo de sincronía
/* for (const letra of "Coders") {
    console.log(letra);
} */

/* for (const letra of "Coders") {
    setTimeout(() => {
        console.log(letra);
    }, 2000);
} */

/* setTimeout(() => {
    for (const letra of "Coders") {
        console.log(letra);
    }
}, 2000); */


// Otro ejemplo
/* console.log("Inicia el proceso!");

setTimeout(() => {
    console.log("Estoy en la mitad del proceso #1!");
}, 0);

console.log("Fin del proceso!"); */


// Ejecución de CallStrack
/* function multiplicar(a, b) {
    console.log("Hola #2");
    return a * b;
}

function imprimirCuadrado(valor) {
    console.log("Hola #1");
    let resultado = multiplicar(valor, valor);
    console.log("Hola #3");
    console.log(resultado);
}

imprimirCuadrado(6);
console.log("Hola #4"); */

// setInterval
/* console.log("Inicio de programa");

setInterval(() => {
    console.log("Tic Tac");
}, 2000);

console.log("Fin de programa"); */

// ClearInterval y ClearTimeout
// ClearInterval
/* let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);

    if (contador == 5) {
        clearInterval(intervalo);
        console.log("Fin del Intervalo");
    }

}, 1000); */

// ClearTimeout
/* console.log("Inicio Programa");

const proceso = setTimeout(() => {
    console.log("Hola Coders");
}, 2000);

clearTimeout(proceso); */


// Promesas (poseen 3 estados => pendiente (estado por defecto), completado y rechazado))
/* const evento = () => {
    return new Promise((resolve, reject) => {
        //console.log("Estoy dentro de la promesa!");
    })
}

console.log(evento()); */

// Promesa que se complete (fullfilled)
/* const evento = () => {
    return new Promise((resolve, reject) => {
        const bebida = {id:1, nombre:"Coca Cola", precio:1400};
        resolve(bebida);
    })
}

console.log(evento()); */

// Promesa que se complete (fullfilled)
/* const evento = (valor) => {
    return new Promise((resolve, reject) => {
        valor ? resolve("Promesa completada!") : reject("Promesa rechazada!");
    })
}

console.log(evento(true));
console.log(evento(false)); */


// Promesa con setTimeout
const evento = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            valor ? resolve("Promesa completada!") : reject("Promesa rechazada!");
        }, 2000);
    })
}

//console.log(evento(true));
//console.log(evento(false));

// Con método then y catch
/* evento(true)
.then(resultado => {
    console.log(resultado);
})

evento(false)
.catch(resultado => {
    console.log(resultado);
}) */

/* evento(false)
.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
}); */


// Método Finally (se ejecuta al final de la promesa indistamente si se completa o rechaza)
/* evento(true)
.then(resultado => {
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
})
.finally(() => {
    console.log("Fin del proceso!");
}); */


// Ejemplo completo
const productos = [
    {id:1, nombre:"Champi King de carne", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Foto-web-carne_400x400-1.png", descripcion:"Pan de papa, Hongos, rúcula, cebolla rehogada y carne. ¡Conquistá un nuevo reino de sabor!", precio:8500, categoria:"hamburguesas"},
    {id:2, nombre:"Stacker con bastones de muzzarella", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Mozzarella.png", descripcion:"Deliciosa carne a la parrilla, panceta, queso cheddar, bastones de muzzarella, y salsa stacker", precio:8000, categoria:"hamburguesas"},
    {id:3, nombre:"Provo King Doble Carne", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Provoking-carne.png", descripcion:"Pan de masa madre con harina de centeno, mayonesa, mix de lechugas, cebolla, alioli de albahaca, tomates secos hidratados en aceite, queso provolone, carne a la parri, queso provolone, carne a la parri.", precio:10000, categoria:"hamburguesas"},
    {id:4, nombre:"WhopperⓇ Doble con Queso", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Armado-whopper-doble-con-queso.png", descripcion:"La clásica WhopperⓇ pero con queso cheddar.", precio:6000, categoria:"hamburguesas"},
    {id:5, nombre:"Whopper Guacamole", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_Whopper-Guacamole_1200X900_210922.png", descripcion:"Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole", precio:7000, categoria:"hamburguesas"},
    {id:6, nombre:"Cheese onion doble", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png", descripcion:"Pan, doble carne a la parrilla, salsa cheddar y cebolla salteada", precio:6500, categoria:"hamburguesas"},
    {id:7, nombre:"Papas Cheddar", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Papas-Cheddar.png", descripcion:"100% papas con queso cheddar.", precio:2500, categoria:"papas"},
    {id:8, nombre:"Balde de Papas", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BaldePapas.png", descripcion:"Las papas de siempre, ahora en balde. Bien crocantes y naturales.", precio:3000, categoria:"papas"},
    {id:9, nombre:"Papas Fritas", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/02/PAPAS-KING.png", descripcion:"Las papas fritas más ricas en cuatro tamaños: regular, mediano, grande y king.", precio:2000, categoria:"papas"}
];

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let valor = Math.round(Math.random()); // 0|1

            valor ? resolve(productos) : reject("Error en la conexión a la BD!") ;
        }, 3000);
    });
}

function renderProductos(productos) {
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-4 text-center">
        <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" alt="${producto.nombre}" height="244" />
        <p class="colorFuente roboto-bold">${producto.nombre}</p>
        </a>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

const cargarSpinner = () => {
    document.getElementById("productos").innerHTML = `<div class="col-md-12 text-center my-5">
    <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
}

const mostrarError = (texto) => {
    document.getElementById("productos").innerHTML = `<div class="alert alert-danger my-5 p-5 text-center" role="alert"><h1>${texto}</h1></div>`;
}

const cargarProductos = () => {
    cargarSpinner();

    obtenerProductos()
    .then(data => {
        renderProductos(data);
    })
    .catch(error => {
        mostrarError(error);
    })
    .finally(() => {
        console.log("Fin del proceso!");
    })
}

document.getElementById("btnEjecutar").onclick = cargarProductos;