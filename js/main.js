function cargarProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    for (const producto of productos) {
        contenido += `<div class="col-md-3 g-4">
        <div class="card h-100">
        <a href="#" onclick="verProducto(${producto.id});"><img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-dark btn-outline" onclick="agregarAlCarrito(${producto.id});">AGREGAR AL CARRITO</a>
        </div>
        </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

guardarProductosLS(productos);
cargarProductos();
actualizarBotonCarrito();