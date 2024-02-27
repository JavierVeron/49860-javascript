// Fetch (y analizamos la respuesta con un console log)
/* fetch('https://jsonplaceholder.typicode.com/posts/')
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data);
}) */


// Render de Posteos
/* function renderPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido = "";

        for (const post of data) {
            contenido += `<div class="col-md-3 mb-3">
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${post.title} #${post.id}</h5>
              <p class="card-text">${post.body}</p>
              <a href="https://jsonplaceholder.typicode.com/posts/${post.id}" class="card-link" target="_blank">Visitar Post</a>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("resultado").innerHTML = contenido;
    })
}

renderPosts(); */


// Render de Productos de FakeApi
/* function renderPosts() {
    fetch('https://fakestoreapi.com/products')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido = "";

        for (const product of data) {
            contenido += `<div class="col-md-3 mb-3">
            <div class="card border-0">
            <img src=${product.image} alt="${product.title}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$${product.price}</p>
                <a href="https://fakestoreapi.com/products/${product.id}" class="btn btn-secondary" target="_blank">Ver Producto</a>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("resultado").innerHTML = contenido;
    })
    .catch(error => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">Error! No se encuentra la URL a la que desea acceder!</div>`;
    })
}

renderPosts(); */


// Postando un documento
/* function postearDoc() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'La sorprendió en su cumple 36',
            body: 'Messi y otra declaración de amor para Antonela Roccuzzo: "Feliz cumpleaños, Princesa"',
            categoria: 'deportes',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
}

postearDoc(); */


// Rutas relativas (consumiendo un archivo .json)
/* function renderPosts() {
    fetch('./js/productos.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenido = "";

        for (const product of data) {
            contenido += `<div class="col-md-3 mb-3">
            <div class="card border-0">
            <img src=${product.imagen} alt="${product.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${product.nombre}</h5>
                <p class="card-text">$${product.precio}</p>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("resultado").innerHTML = contenido;
    })
    .catch(error => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">Error! No se encuentra la URL a la que desea acceder!</div>`;
    })
}

renderPosts(); */


// Async - Await
// Definir una función asíncrona
/* async function renderPosts() {
    const respuesta = await fetch('./js/productos.json');
    const data = await respuesta.json();
    let contenido = "";

    for (const product of data) {
        contenido += `<div class="col-md-3 mb-3">
        <div class="card border-0">
        <img src=${product.imagen} alt="${product.nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">$${product.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("resultado").innerHTML = contenido;
} */

// Defino un arrow function asíncrona
const renderPosts = async () => {
    const respuesta = await fetch('./js/productos.json');
    const data = await respuesta.json();
    let contenido = "";

    for (const product of data) {
        contenido += `<div class="col-md-3 mb-3">
        <div class="card border-0">
        <img src=${product.imagen} alt="${product.nombre}">
        <div class="card-body text-center">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">$${product.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("resultado").innerHTML = contenido;
}

renderPosts();