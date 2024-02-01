function saludar() {
    document.getElementById("resultado").innerHTML = `<div class="alert alert-warning" role="alert">Hola Mundo!</div>`;
}

function saludar2() {
    document.getElementById("resultado").innerHTML = `<div class="alert alert-danger" role="alert">Que calor está haciendo!!!</div>`;
}

// Hago referencia al botón "boton1"
let boton = document.getElementById("boton1");
// Opción #1 - Asignar evento
/* //boton.addEventListener("click", saludar); // Asigne el evento click, al botón "boton1" con la función saludar
boton.addEventListener("click", () => {
    document.getElementById("resultado").innerHTML = `<div class="alert alert-warning" role="alert">Hola A Todos!</div>`;
}); // Asigne el evento click, al botón "boton1" y declare directamente la función */


// Opción #2 - Modificar la propiedad onclick
/* boton.onclick = () => {
    document.getElementById("resultado").innerHTML = `<div class="alert alert-success" role="alert">Esta noche me como una Pizza!!!</div>`;
}
boton.onclick = saludar2; */


// Otros Eventos en JS
/* boton.onclick = saludar;
boton.onmousemove = () => {
    console.log("Estás moviendo el Mouse!");
}
boton.onmouseout = () => {
    console.log("Salió el puntero del Mouse!");
    boton.className = "btn btn-primary";
}
boton.onmouseover = () => {
    console.log("Entró el punto del Mouse!");
    boton.className = "btn btn-danger";
}
document.getElementById("boton2").onclick = saludar; */


// Eventos de Formulario
/* let campoNombre = document.getElementById("nombre");
let campoEmail = document.getElementById("email");
campoNombre.onkeydown = () => {
    console.log("Presionaste una tecla (abajo)");
}
campoNombre.onkeyup = () => {
    console.log("Soltaste una tecla (arriba)");
}
campoEmail.onkeyup = () => {
    let validacionEmail = document.getElementById("validacionEmail");

    if (campoEmail.value.length > 0) {
        if (validarEmail(campoEmail.value)) {
            validacionEmail.className = "my-3 p-3 border border-success text-success";
            validacionEmail.innerHTML = "Es una dirección de email válida!";
        } else {
            validacionEmail.className = "my-3 p-3 border border-danger text-danger";
            validacionEmail.innerHTML = "No es una dirección de email válida!";
        }
    } else {
        validacionEmail.innerHTML = "";
        validacionEmail.className = "";
    }

    //console.log("Presionaste una tecla!");
}

function validarEmail(email) {
    if (email.includes("@")) {
        return true
    } else {
        return false
    }
}

let arrayCiudadesPaises = [
    {id:1, nombre:"Buenos Aires", pais:"Argentina"},
    {id:2, nombre:"Córdoba", pais:"Argentina"},
    {id:3, nombre:"Montevideo", pais:"Uruguay"},
    {id:4, nombre:"Iquique", pais:"Chile"},
    {id:5, nombre:"Santiago de Chile", pais:"Chile"}
]

function seleccionPais() {
    let selectPais = document.getElementById("pais");
    let ciudadesPaises = document.getElementById("ciudadesPaises");
    let paisSeleccionado = document.getElementById("paisSeleccionado");

    const ciudadesFiltro = arrayCiudadesPaises.filter(item => item.pais == selectPais.value);
    ciudadesPaises.innerHTML = "";
    
    for (const ciudad of ciudadesFiltro) {
        let opcion = document.createElement("option");
        opcion.value = ciudad.nombre;
        opcion.innerHTML = ciudad.nombre;
        ciudadesPaises.appendChild(opcion);
    }

    paisSeleccionado.innerHTML = `Seleccionaste el país: <b>${selectPais.value}`;
}

document.getElementById("pais").onchange = seleccionPais; */


// Validaciones de Formulario con Boton "button"
/* function validarFormulario() {
    let campoNombre = document.getElementById("nombre").value;
    let divCampoNombre = document.getElementById("validacionNombre");
    let campoEmail = document.getElementById("email").value;
    let divCampoEmail = document.getElementById("validacionEmail");

    if (campoNombre.length >= 2) {
        divCampoNombre.innerHTML = "";
    } else {
        divCampoNombre.innerHTML = "Ingrese un Nombre!";
        divCampoNombre.className = "text-danger";
        return false;
    }

    if (campoEmail.includes("@")) {
        divCampoEmail.innerHTML = "";
    } else {
        divCampoEmail.innerHTML = "Ingrese un Email válido!";
        divCampoEmail.className = "text-danger";
        return false;
    }

    document.getElementById("form1").submit();
}

document.getElementById("btnEnviar").addEventListener("click", validarFormulario); */

// Validación de Formulario con Boton "submit"
/* function validarFormulario(e) {
    e.preventDefault();

    let campoNombre = document.getElementById("nombre").value;
    let divCampoNombre = document.getElementById("validacionNombre");
    let campoEmail = document.getElementById("email").value;
    let divCampoEmail = document.getElementById("validacionEmail");

    if (campoNombre.length >= 2) {
        divCampoNombre.innerHTML = "";
    } else {
        divCampoNombre.innerHTML = "Ingrese un Nombre!";
        divCampoNombre.className = "text-danger";
        return false;
    }

    if (campoEmail.includes("@")) {
        divCampoEmail.innerHTML = "";
    } else {
        divCampoEmail.innerHTML = "Ingrese un Email válido!";
        divCampoEmail.className = "text-danger";
        return false;
    }

    document.getElementById("form1").submit();
}

//document.getElementById("form1").addEventListener("submit", validarFormulario); // Opción #1
document.getElementById("form1").onsubmit = validarFormulario; // Opción #2 Equivalente */

// Validación de Formulario con campos sin IDs
let formulario = document.getElementById("formulario");

function validarFormulario(e) {
    e.preventDefault();
    let nombre = formulario.children[0].value;
    let email = formulario.children[1].value;
    document.getElementById("resultado").innerHTML = `Nombre: <b>${nombre}</b> - Email: <b>${email}`;
}

formulario.onsubmit = validarFormulario;