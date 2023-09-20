const listaDeProductos = [];

let productosMasEconomicos = [];

function mostrarEnHTML(id, listaDeProductos) {
    const lista = document.getElementById(id);
    lista.innerHTML = '';

    listaDeProductos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'product-container';

        const nombreP = document.createElement('p');
        nombreP.textContent = `Nombre del producto: ${producto.nombre}`;

        const precioP = document.createElement('p');
        precioP.textContent = `Precio: ${producto.precio} pesos`;

        const categoriaP = document.createElement('p');
        categoriaP.textContent = `Categoria: ${producto.categoria}`;

        const superP =document.createElement('p');
        superP.textContent=`Comercio: ${producto.supermercado}`;

        div.appendChild(nombreP);
        div.appendChild(precioP);
        div.appendChild(categoriaP);
        div.appendChild(superP);

        lista.appendChild(div);
    });
};

function mostrarListaDeProductos() {
    mostrarEnHTML('list-of-products', listaDeProductos);
};

function agregarProducto() {
    const nombre = document.getElementById('name').value;
    const precio = parseFloat(document.getElementById('price').value);
    let sup=document.getElementById('market');
    const supermercado =sup.options[sup.selectedIndex].text; 
    let cat=document.getElementById('categoria');
    const categoria = cat.options[cat.selectedIndex].text;

    if (nombre && precio && supermercado && categoria) {
        const nuevoProducto = { "nombre": nombre, "precio": precio, "supermercado": supermercado, "categoria": categoria };
        listaDeProductos.push(nuevoProducto);

     //   mostrarListaDeProductos()
        document.getElementById('product-form').reset();
        alert("¡Producto agregado correctamente!");
    } else {
        alert("Por favor, complete todos los campos.");
    };
};

function filtroMenorPrecio() {
    listaDeProductos.sort((producto, menor) => producto.precio - menor.precio);
    productosMasEconomicos = listaDeProductos.slice(0, 1);

    mostrarEnHTML('low-prices', productosMasEconomicos)
    alert("Estos son los productos más económicos: ");
};