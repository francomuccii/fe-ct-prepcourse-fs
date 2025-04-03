let actividadesSospechosas = [];

function agregarActividad(descripcion, nivelRiesgo) {
    if (!descripcion || !nivelRiesgo) {
        return "Descripcion o nivel de riesgo no valido";
    }
    
    let riesgosValidos = ["bajo", "medio", "alto"];
    if (!riesgosValidos.includes(nivelRiesgo)) {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }
    
    actividadesSospechosas.push(`Descripcion: '${descripcion}', Riesgo - '${nivelRiesgo}'`);
    return `Actividad: '${descripcion}' con Nivel de riesgo: '${nivelRiesgo}' fue agregada con exito`;
}

function eliminarActividadSospechosa(indice) {
    if (typeof indice !== "number") {
        return "El indice no es valido, debe ser un numero";
    }
    
    if (indice < 0 || indice >= actividadesSospechosas.length) {
        return "El indice no es valido, se encuentra fuera del rango";
    }
    
    actividadesSospechosas.splice(indice, 1);
    return "Actividad eliminada con exito";
}

function filtrarActividadesPorRiesgo(nivelRiesgo) {
    if (!nivelRiesgo) {
        return "Nivel de riesgo no valido";
    }
    
    let riesgosValidos = ["bajo", "medio", "alto"];
    if (!riesgosValidos.includes(nivelRiesgo)) {
        return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto";
    }
    
    let actividadesFiltradas = actividadesSospechosas.filter(actividad => actividad.includes(`Riesgo - '${nivelRiesgo}'`));
    
    return actividadesFiltradas.length > 0 ? actividadesFiltradas : "No hay actividades con este nivel de riesgo";
}

function generarReportedeActividades() {
    if (actividadesSospechosas.length === 0) {
        return "No hay actividades para mostrar";
    }
    
    return actividadesSospechosas.map((actividad, index) => `Id: ${index}, ${actividad}`);
}
 