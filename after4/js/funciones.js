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

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const obtenerIdCategoriaLS = () => {
    return JSON.parse(localStorage.getItem("categoria")) || "todos";
}

const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const sumaTotalProductos = () => {
    const carrito = obtenerCarritoLS();
    
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
}

const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    notificacion("Carrito Eliminado!");
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const verProductosPorCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
}

const buscarProducto = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);

    return producto;
}

const agregarProductoCarrito = () => {
    const producto = buscarProducto();
    const carrito = obtenerCarritoLS();
    carrito.push(producto);
    guardarCarritoLS(carrito);
    renderBotonCarrito();
    notificacion("Producto Agregado!");
}

const eliminarProductoCarrito = (id) => {
    const carrito = obtenerCarritoLS();
    const carritoActualizado = carrito.filter(item => item.id != id);
    guardarCarritoLS(carritoActualizado);
    renderCarrito();
    renderBotonCarrito();
    notificacion("Producto Eliminado!");
}

const renderBotonCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}

const finalizarCompra = () => {
    Swal.fire({
        title: "Gracias por tu Compra!",
        text: "El total a pagar es $" + sumaTotalProductos() + " pesos.",
        imageUrl: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Burger-King-Logo-CMS.png",
        imageWidth: 160,
        imageAlt: "Burger King",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarCarrito();
            }
        });
}

const notificacion = (texto) => {
    Swal.fire({
        position: "top-end",
        title: texto,
        showConfirmButton: false,
        timer: 1000
    });
}

guardarProductosLS(productos);