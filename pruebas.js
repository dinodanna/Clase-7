function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos un caracter",
        "validarNombre no pudo validar si hay un string vacío"
    );

    console.assert(
        validarNombre(
            "dinoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
        ) === "Este campo debe tener menos de 50 caracteres",
        "validarNombre no validó si hay mas de 50 caracteres"
    );

    console.assert(
        validarNombre("Dino") === "",
        "validarNombre falló con un nombre válido"
    );

    console.assert(
        validarNombre("dino1") === "Este campo solo puede contener letras",
        "validarNombre no comprobó que el campo contiene un número"
    );
}

function probarValidarProvincia() {
    console.assert(
        validarProvincia("") === "Debe seleccionar una provincia",
        "validarProvincia no falló con un string vacío"
    );
    console.assert(
        validarProvincia("Chubut") === "",
        "validarProvincia falló con una provincia válida"
    );
}

function probarValidarComportamiento() {
    console.assert(
        validarComportamiento("") === "Debe seleccionar un comportamiento",
        "validarComportamiento no pudo validar si hay un string vacío"
    );
    console.assert("Bueno") === "",
        "validarComportamiento no funcionó con un comportamiento válido";
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo no puede estar vacío",
        "validarDescripcionRegalo no pudo validar si hay un string vacío"
    );
    console.assert(
        validarDescripcionRegalo(
            "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo no puede contener mas de 100 caracteres",
        "validarDescripción regalo no comprobó que el campo tiene mas de 100 caracteres"
    );
    console.assert(
        validarDescripcionRegalo("Regalo") === "",
        "validarDescripcionRegalo no funcionó con un campo válido"
    );

    console.assert(
        validarDescripcionRegalo(",,,..") ===
            "Este campo solo puede contener numeros y letras",
        "validarDescripcionRegalo no comprobó que el campo solo fueran números y letras"
    );
}

probarValidarDescripcionRegalo();

probarValidarNombre();

probarValidarComportamiento();

probarValidarProvincia();
