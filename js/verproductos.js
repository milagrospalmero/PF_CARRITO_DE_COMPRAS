// Acceder a un JSON
const resultado = document.getElementById("resultado");
fetch('js/productos.json')
.then((response) => response.json())
.then((data) => {
    data.forEach(valor => {
        let div_padre = document.createElement("div");
        div_padre.className = "card";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre} <b>$${valor.precio}</b>`;
        parrafo.innerText = valor.descripcion;
        div_hijo2.appendChild(parrafo);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        resultado.appendChild(div_padre);
    });
}) 
