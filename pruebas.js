function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos un caracter",
        "validarNombre no pudo validar si hay un string vacío"
    );

    console.assert(
        validarNombre("111111111111111111111111111111111111111111111111111") ===
            "Este campo debe tener menos de 50 caracteres",
        "validarNombre no validó si hay mas de 50 caracteres"
    );
}

probarValidarNombre();

console.assert(
    validarProvincia("") === "Debe seleccionar una provincia",
    "validarProvincia no pudo validar si hay un string vacío"
);

console.assert(
    validarComportamiento("") === "Debe seleccionar un comportamiento",
    "validarComportamiento no pudo validar si hay un string vacío"
);

console.assert(
    validarDescripcionRegalo("") === "Este campo no puede estar vacío",
    "validarDescripcionRegalo no pudo validar si hay un string vacío"
);
