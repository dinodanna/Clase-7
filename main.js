/*
 * Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
 * Escribir pruebas para esas funciones.
 *
 * Adicional: Escribir pruebas para las funciones de tareas anteriores.
 *
 * */

const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const provincia = $form.provincia.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

function validarNombre(nombre) {
    if (nombre === "") {
        return "Este campo debe tener al menos un caracter";
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "Este campo solo puede contener letras";
    }

    return "";
}

function validarProvincia(provincia) {
    if (provincia === "") {
        return "Debe seleccionar una provincia";
    }
    return "";
}

function validarComportamiento(comportamiento) {
    if (comportamiento === "") {
        return "Debe seleccionar un comportamiento";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === "") {
        return "Este campo no puede estar vacío";
    }

    if (descripcionRegalo.length >= 100) {
        return "Este campo no puede contener mas de 100 caracteres";
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "Este campo solo puede contener numeros y letras";
    }

    return "";
}

function borrarErroresAnteriores(errores) {
    errores.forEach(function (element) {
        element.remove();
    });
}

const errorNombre = validarNombre($form.nombre.value);

function validarFormulario(event) {
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const provincia = $form.provincia.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorProvincia = validarProvincia(provincia);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        provincia: errorProvincia,
        "descripcion-regalo": errorDescripcionRegalo,
    };
    console.log(errores);

    const todoEnOrden = manejarErrores(errores) === 0;

    if (todoEnOrden) {
        document.querySelector("#exito").className = "";
        $form.className = "oculto";
        setTimeout(function () {
            window.location.href = "wishlist.html";
        }, 5000);

        event.preventDefault();
    }
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;
    const erroresAnteriores = document.querySelectorAll("#errores li");

    borrarErroresAnteriores(erroresAnteriores);

    keys.forEach(function (key) {
        const error = errores[key];
        const $errores = document.querySelector("#errores");

        if (error) {
            cantidadErrores++;
            $form[key].className = "error";
            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = "";
        }
    });
    return cantidadErrores;
}

$form.onsubmit = validarFormulario;
