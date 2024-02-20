// Toastify por default
/* function validarForm() {
    Toastify({
        text: "Probando toast!",
        duration: 2000,
        
    }).showToast();
} */

// Toastify con ubicación
/* function validarForm() {
    Toastify({
        text: "Probando toast!",
        duration: 2000,
        gravity: "bottom",
        position: "left"
    }).showToast();
} */

// Toastify con ubicación y color de fondo
/* function validarForm() {
    Toastify({
        text: "Probando toast!",
        duration: 2000,
        gravity: "top",
        position: "right",
        style:{
            background: "linear-gradient(to right, red, white)"
        },
        newWindow:true,
        destination:"https://www.google.com.ar"
    }).showToast();
} */


function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Toastify({
            text: "Error! Complete el campo Nombre!",
            duration: 2000,
            gravity: "top",
            position: "right",
            style:{
                background: "red"
            }
        }).showToast();

        return false;
    } else {
        guardarDatosLS();

        Toastify({
            text: "Tus datos fueron guardados en la LocalStorage!",
            duration: 2000,
            gravity: "top",
            position: "right",
            style:{
                background: "green"
            },
            onClick: () => {
                eliminarDatosLS();

                Toastify({
                    text: "Ok! La LocalStorage se elimino correctamente!",
                    duration: 2000,
                    gravity: "top",
                    position: "right",
                    style:{
                        background: "blue"
                    }
                }).showToast();
            }
        }).showToast();
    }
}

function guardarDatosLS() {
    let nombre = document.getElementById("nombre");
    localStorage.setItem("datosForm", JSON.stringify(nombre.value));
    nombre.value = "";
}

function eliminarDatosLS() {
    localStorage.removeItem("datosForm");
}