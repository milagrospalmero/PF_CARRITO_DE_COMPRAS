function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;
    let resultado_form = document.getElementById("resultado_form");

    //utilizar Operadores avanzados
    
    /*if (nombre.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Nombre!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }*/

    let resultado_nombre = nombre.length == 0 ? "Ingrese un valor para el campo Nombre!" : "";
    resultado_form.innerHTML = resultado_nombre;
    if (nombre.length == 0) { return false };

    
    if (email.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Email!</div>";
        return false;
    } else if (email.indexOf("@") == -1) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamente el Email para el campo Email!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }
 
     if ((telefono.length )) {
       resultado_form.innerHTML = "";
    }

   /*if (direccion.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Dirección!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }*/
    let resultado_direccion = direccion.length == 0 ? "Ingrese un valor para el campo Direccion!" : "";
    resultado_form.innerHTML = resultado_direccion;
    if (direccion.length == 0) { return false };

    
    //Creo un objeto con los datos del usuario
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email, usuario_telefono:telefono, usuario_direccion:direccion, usuario_localidad:localidad, usuario_provincia:provincia};
    //Creo una localStorage con los datos del formulario en un array
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));
    //Redireccionar mi pagina carrito.html a confirmacion.html
    document.location = "confirmacion.html";
}

document.getElementById("boton_enviar").addEventListener("click", validarFormulario);