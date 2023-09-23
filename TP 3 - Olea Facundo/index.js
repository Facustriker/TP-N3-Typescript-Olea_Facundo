fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (productos) {
    //Preparamos la tabla HTML
    var tablaHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    //Iteramos a traes de todos los productos para ir generando las filas de nuestra tabla
    productos.forEach(function (p) {
        tablaHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    //Cerramos el body de la tabla DESPUES de haber usado el for para generar las filas
    //(no lo cerramos antes para que se generen tantas filas como sea necesario)
    tablaHTML += '</tbody>';
    //Agarramos elementoTabla para setear su HTML interno al que acabamos de crear mas arriba
    document.querySelector('#elementoTabla').innerHTML = tablaHTML;
    //Escondemos el Spinner una vez que aparece la tabla
    var elementoSpiner = document.querySelector('#contenedorSpinner');
    elementoSpiner.style.display = 'none';
});
