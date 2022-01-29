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
}

function validarProvincia(provincia) {
    if (provincia === "") {
        return "Debe seleccionar una provincia";
    }
}

function validarComportamiento(comportamiento) {
    if (comportamiento === "") {
        return "Debe seleccionar un comportamiento";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === "") {
        return "Este campo no puede estar vacío";
    }
}
