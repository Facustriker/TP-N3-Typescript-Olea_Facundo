type Rating = {
    rate: number;
    count: number;
}

type Producto = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
}

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((productos: Producto[]) => {
    //Preparamos la tabla HTML
   let tablaHTML:string = '<thead><tr><th>ID</th><th>Titulo</th><th>Descripcion</th><th>Precio</th></tr></thead><tbody>';
   //Iteramos a traes de todos los productos para ir generando las filas de nuestra tabla
   productos.forEach((p: Producto) => {
    tablaHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
   });
   //Cerramos el body de la tabla DESPUES de haber usado el for para generar las filas
   //(no lo cerramos antes para que se generen tantas filas como sea necesario)
   tablaHTML += '</tbody>';
   //Agarramos elementoTabla para setear su HTML interno al que acabamos de crear mas arriba
   document.querySelector('#elementoTabla')!.innerHTML = tablaHTML;
   //Escondemos el Spinner una vez que aparece la tabla
   const elementoSpiner: HTMLElement = document.querySelector('#contenedorSpinner')!;
   elementoSpiner.style.display = 'none';
});