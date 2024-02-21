function renderProducto() {
    const producto = buscarProducto();
    let contenido = `<div class='row'>
    <div class="col-md-6 offset-md-3 text-center">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    </div>
    <div class='row'>
    <div class="col-md-8 offset-md-2 text-center">
    <h2 class="colorFuente roboto-bold">${producto.nombre}</h2>
    <p class="colorFuente roboto-medium">${producto.descripcion}</p>
    <p class="colorFuente roboto-bold">$${producto.precio}</p>
    <p><button class="btn colorFondo2" onclick="agregarProductoCarrito()">(+) Agregar</button></p>
    </div>
    </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

renderProducto();
renderBotonCarrito();