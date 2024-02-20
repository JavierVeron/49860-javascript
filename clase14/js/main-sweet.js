// Sweet Alert como ventana emergente
/* function validarForm() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Qué hiciste perro?",
        confirmButtonText: "Aceptar",
        footer: '<a href="http://www.google.com.ar" class="btn btn-warning">Ir a Google</a>'
      });
} */

// Sweet Alert personalizado como si fuera una notificación
/* function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Swal.fire({
            position:"top-end",
            icon: "error",
            text: "Complete el campo Nombre!",
            showConfirmButton: false,
            timer: 1000
          });

        return false;
    }
} */

// Sweet Alert con imágenes
/* function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Swal.fire({
            position:"center",
            text: "Complete el campo Nombre!",
            imageUrl: "https://www.ole.com.ar/2024/02/19/i-K6K9j6f_300x220__1.jpg",
            imageWidth: 320,
            imageAlt: "Lionel Messi",  
            showConfirmButton: false,
            timer: 1000
          });

        return false;
    }
} */

// Sweet Alert con color de fondo e imagen de fondo
/* function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Swal.fire({
            position:"center",
            text: "Complete el campo Nombre!",
            background: "pink",
            color: "white",
            width: "100%",
            padding: "200px",
            imageUrl: "https://www.ole.com.ar/2024/02/19/i-K6K9j6f_300x220__1.jpg",
            imageWidth: 320,
            imageAlt: "Lionel Messi",  
            showConfirmButton: false,
            timer: 1000
          });

        return false;
    }
} */

// Sweet Alert con botón de confirmación
/* function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Swal.fire({
            position:"top-end",
            icon: "error",
            text: "Complete el campo Nombre!",
            showConfirmButton: false,
            timer: 1000
          });

        return false;
    } else {
        Swal.fire({
            title: "Deseas guardar los datos del Usuario?",
            text: "Por favor, confirmar.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí!"
          }).then((result) => {
            if (result.isConfirmed) {
                guardarDatosLS();
                Swal.fire({
                    title: "Guardado!",
                    text: "Tus datos fueron guardados correctamente en la LocalStorage!",
                    icon: "success"
                });
            }
        });
    }
} */

// Sweet Alert con botón de confirmación y cancelación
function validarForm() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.length == 0) {
        Swal.fire({
            position:"top-end",
            icon: "error",
            text: "Complete el campo Nombre!",
            showConfirmButton: false,
            timer: 1000
          });

        return false;
    } else {
        Swal.fire({
            title: "Desea eliminar los datos del Usuario?",
            text: "Por favor, confirmar.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Guardar Datos!"
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarDatosLS();
                Swal.fire({
                    title: "Eliminado!",
                    text: "Tus datos de la LocalStorage fueron eliminados correctamente!",
                    icon: "success"
                });
            } else {
                guardarDatosLS();
                Swal.fire({
                    title: "Guardado!",
                    text: "Tus datos fueron guardados correctamente en la LocalStorage!",
                    icon: "success"
                });
            }
        });
    }
}

function guardarDatosLS() {
    let nombre = document.getElementById("nombre");
    localStorage.setItem("datosForm", JSON.stringify(nombre.value));
}

function eliminarDatosLS() {
    localStorage.removeItem("datosForm");
}

