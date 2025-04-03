var abecedario;

function checklongitud(Longitud){
 if(!Longitud)return "debe ingresar longitud"
 if(typeof Longitud!=="number")return "la longitud recibida no es valida"
 if (Longitud <3) return "la longitud debe ser mayor o igual a 3"
 if(Longitud >10) return "la longitud debe ser menor o igual a 10"
 return Longitud
}
function generarcontraseña(Longitud,Incespeciales,Incnums,IncMayus){
var letras="abcdefghijklmnopqrstuvwxyz"
var numeros="0123456789"
var especiales="!.$%&/@?¡'¿"
var letrasmayusculas=letras.toUpperCase()
var caracteresdisponibles=letras;
var contraseña = ""

if(Incespeciales===true){
    caracteresdisponibles += especiales
}
if(Incnums===true){
    caracteresdisponibles += numeros
}  
if(IncMayus===true){
    caracteresdisponibles += letrasmayusculas
}

if(Longitud>=3){
var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
contraseña = contraseña + caracteraleatorio
var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
contraseña = contraseña + caracteraleatorio
var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
contraseña = contraseña + caracteraleatorio
}
if(Longitud>=4){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=5){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=6){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=7){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=8){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=9){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
if(Longitud>=10){
    var Indicerandom =Math.floor(Math.random()*caracteresdisponibles.length)
    var caracteraleatorio = caracteresdisponibles.charAt(Indicerandom)
    contraseña = contraseña + caracteraleatorio
}
return "contraseña generada: " + contraseña;

}


