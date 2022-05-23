function mostrarErrorCampo (campo){
    Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Complete el campo' +  campo,
        confirmButtontext: 'Aceptar'
      })

}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;
   // let resultado_form = document.getElementById("resultado_form");
   
    if (nombre.length == 0) {
        mostrarErrorCampo (" Nombre")
        //resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Nombre!</div>";
        return false;
    } /*else {
        resultado_form.innerHTML = "";
    }*/

    // OPERADORES AVANZADOS 
    /*let resultado_nombre = nombre.length == 0 ? "Ingrese un valor para el campo Nombre!" : "";
    resultado_form.innerHTML = resultado_nombre;
    if (nombre.length == 0) { return false };
*/
    
    if (email.length == 0) {
        //resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Email!</div>";
        mostrarErrorCampo (" Email")
        return false;
    } else if (email.indexOf("@") == -1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!!',
            text: 'Coloque un Email valido',
            confirmButtontext: 'Aceptar'
          })
        //resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamente el Email para el campo Email!</div>";
        return false;
    } /*else {
        resultado_form.innerHTML = "";
    }*/
 
     if ((telefono.length == 0)) {
        mostrarErrorCampo (" Telefono")
        //resultado_form.innerHTML = "";
        return false;
    }

   if (direccion.length == 0) {
    mostrarErrorCampo (" Direccion")
        // resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Dirección!</div>";
        return false;
    } /*else {
        resultado_form.innerHTML = "";
    }*/
    //OPERADORES AVANZADOS 
    /*let resultado_direccion = direccion.length == 0 ? "Ingrese un valor para el campo Direccion!" : "";
    resultado_form.innerHTML = resultado_direccion;
    if (direccion.length == 0) { return false };*/

    
    //Creo un objeto con los datos del usuario
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email, usuario_telefono:telefono, usuario_direccion:direccion, usuario_localidad:localidad, usuario_provincia:provincia};
    //Creo una localStorage con los datos del formulario en un array
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));
    //Redireccionar mi pagina carrito.html a confirmacion.html
    document.location = "confirmacion.html";
  
    
}

document.getElementById("boton_enviar").addEventListener("click", validarFormulario);
