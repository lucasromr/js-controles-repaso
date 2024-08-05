/*
    DOMContentLoaded sirve para controlar
    que primero se cargue TODO el documento
    HTML, por ultimo javascript
*/+
document.addEventListener("DOMContentLoaded", function(){
    alert("Haz clik en aceptar");
});
document.addEventListener("DOMContentLoaded", function(){
   onsole.log(document.getElementById("txtApellido").value);
});

// añadiendo evento clic al botón mostrar
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function() {
    //console.log('haciendo click');
    //alert("hice clic");
    //recuperando info del formulario
    const nombres = document.getElementById("txtNombre").value;
    const apellido = document.getElementById("txtApellido").value;
    const cedula = document.getElementById("txtCedula").value;
    const dirección = document.getElementById("txtDirección").value;
    console.log('nombres ' +nombres+ ', apellidos ' +apellido+ ', cedula ' + cedula+ ', dirección ' + dirección);
    alert('nombres ' +nombres+ ', apellidos ' +apellido+ ', cedula ' + cedula+ ', dirección ' + dirección);

});

function hola(nombre, apellido) {
    console.log(nombre, apellido);
    // codigo reutilizable
}