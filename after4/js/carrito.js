function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if (cantTotalProductos() > 0) {
        contenido = `<table class="colorFondo">
        <tbody>
        <tr>
        <td colspan='4' class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito [X]</button></td>
        </tr>`;

        for (const producto of carrito) {
            contenido += `<tr class="colorFondo">
            <td class="text-start"><img src="${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="text-start">${producto.nombre}</td>
            <td class="text-start"><b>$${producto.precio}</b></td>
            <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarProductoCarrito(${producto.id})" title="Eliminar Producto"><img src="images/trash.svg" alt="Eliminar Producto" width="16" /></button></td>
            </tr>`;
        }

        contenido += `<tr>
        <td class="text-center" colspan='2'>Total a Pagar</td>
        <td><b>$${sumaTotalProductos()}</b></td>
        <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="finalizarCompra()" title="Finalizar Compra"><b>Finalizar Compra</b></button></td>
        </tr>
        </tbody>
        </table>`;
    } else {
        contenido = `<h1 class="colorFuente roboto-bold my-5 p-5 text-center">No se encontraron Productos en el Carrito!</h1>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();