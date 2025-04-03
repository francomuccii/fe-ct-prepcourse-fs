function validarNumerosRepetidos(codigo) {
    for (let i = 0; i < codigo.length; i++) {
        for (let j = i + 1; j < codigo.length; j++) {
            if (codigo[i] === codigo[j]) {
                return true;
            }
        }
    }
    return false;
}

function cajaFuerte(codigoSecreto, intentos) {
    if (codigoSecreto.length !== 4) return "El codigo debe tener exactamente 4 digitos";

    for (let i = 0; i < codigoSecreto.length; i++) {
        if (codigoSecreto[i] < '0' || codigoSecreto[i] > '9') {
            return "El codigo secreto solo puede estar conformado por numeros";
        }
    }

    if (validarNumerosRepetidos(codigoSecreto)) return "el codigo no puede tener numeros repetidos";
    if (intentos < 1 || intentos > 5) return "Solo se permite una cantidad de intentos mayor a 0 y menor a 6";

    return `${codigoSecreto}${intentos}`;
}

function desbloquearCajaFuerte(codigoSecreto, codigoDesbloqueo, intentosTotales) {
    let contadorIntentos = 0;

    if (codigoDesbloqueo.length !== 4) return "El codigo debe tener exactamente 4 digitos";

    for (let i = 0; i < codigoDesbloqueo.length; i++) {
        if (codigoDesbloqueo[i] < '0' || codigoDesbloqueo[i] > '9') {
            return "El codigo de desbloqueo solo puede estar conformado por numeros";
        }
    }

    if (validarNumerosRepetidos(codigoDesbloqueo)) return "el codigo no puede tener numeros repetidos";

    while (contadorIntentos < intentosTotales) {
        contadorIntentos++;

        if (codigoSecreto === codigoDesbloqueo) {
            return `Acceso concedido despues de : ${contadorIntentos} intentos`;
        }

        if (codigoDesbloqueo % 2 === 0) {
            console.log("el codigo es divisible x 2");
        } else if (codigoDesbloqueo > codigoSecreto) {
            console.log("Código incorrecto demasiado alto");
        } else {
            console.log("codigo incorrecto");
        }

        if (contadorIntentos >= intentosTotales) {
            return "Acceso denegado. Se agotaron los intentos";
        }
    }
}
