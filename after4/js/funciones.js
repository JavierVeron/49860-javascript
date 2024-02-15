const productos = [
    {id:1, nombre:"Champi King de carne", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Foto-web-carne_400x400-1.png", descripcion:"Pan de papa, Hongos, rúcula, cebolla rehogada y carne. ¡Conquistá un nuevo reino de sabor!", precio:8500},
    {id:2, nombre:"Stacker con bastones de muzzarella", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Mozzarella.png", descripcion:"Deliciosa carne a la parrilla, panceta, queso cheddar, bastones de muzzarella, y salsa stacker", precio:8000},
    {id:3, nombre:"Provo King Doble Carne", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Provoking-carne.png", descripcion:"Pan de masa madre con harina de centeno, mayonesa, mix de lechugas, cebolla, alioli de albahaca, tomates secos hidratados en aceite, queso provolone, carne a la parri, queso provolone, carne a la parri.", precio:10000},
    {id:4, nombre:"WhopperⓇ Doble con Queso", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Armado-whopper-doble-con-queso.png", descripcion:"La clásica WhopperⓇ pero con queso cheddar.", precio:6000},
    {id:5, nombre:"Whopper Guacamole", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_Whopper-Guacamole_1200X900_210922.png", descripcion:"Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole", precio:7000},
    {id:6, nombre:"Cheese onion doble", imagen:"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png", descripcion:"Pan, doble carne a la parrilla, salsa cheddar y cebolla salteada", precio:6500}
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

const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();

    return carrito.length;
}

const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const obtenerProductoLS = () => {
    const productos = obtenerProductosLS();
    const id = obtenerIdProductoLS();
    const producto = productos.find(item => item.id === id);
    
    return producto;
}

guardarProductosLS(productos);