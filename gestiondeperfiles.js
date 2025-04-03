var perfiles = [
    { usuario: "Alice", codigo: 1234, nivel_de_autorizacion: "bajo", antiguedad: 12 },
    { usuario: "Bob", codigo: 5678, nivel_de_autorizacion: "medio", antiguedad: 24 },
    { usuario: "Charlie", codigo: 9101, nivel_de_autorizacion: "alto", antiguedad: 36 },
    { usuario: "Diana", codigo: 1122, nivel_de_autorizacion: "admin", antiguedad: 48 },
  ];
  
  var asistente = {
    verPerfiles: function(opcion) {
      return perfiles.map(perfil => perfil[opcion]).filter(valor => valor !== undefined);
    },
    
    verPerfilesPorAntiguedad: function() {
      return [...perfiles].sort((a, b) => b.antiguedad - a.antiguedad);
    },
    
    verAdministradores: function() {
      return perfiles.filter(perfil => perfil.nivel_de_autorizacion === "admin");
    },
    
    modificarAcceso: function(usuario, nuevoCodigo) {
      if (typeof nuevoCodigo !== "number" || nuevoCodigo < 1000 || nuevoCodigo > 9999) {
        return "codigo de acceso invalido, debe contener solo 4 numeros";
      }
      console.log("usuario: ", usuario)
      console.log("perfiles: ", perfiles)
      let perfil = perfiles.find(p => p.usuario === usuario);
      if (!perfil) {
        return "usuario no encontrado";
      }
      
      perfil.codigo = nuevoCodigo;
      return "codigo de acceso modificado";
    }
  };
  