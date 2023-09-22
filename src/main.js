const listaDeProductos = [
    {
        "nombre": "Papel higiénico x4/u",
        "precio": 520.99,
        "distribuidor": "Chango Más",
        "categoria": "Higiene"
    },
    {
        "nombre": "Huevos x12/u",
        "precio": 470.00,
        "distribuidor": "Carrefour",
        "categoria": "Carnes / producto animal"
    },
    {
        "nombre": "Jabón de manos x400ml",
        "precio": 450.25,
        "distribuidor": "Comodín",
        "categoria": "Higiene"
    },
    {
        "nombre": "Tomates x1Kg",
        "precio": 450.00,
        "distribuidor": "Jaguar",
        "categoria": "Frutas y verduras"
    },
    {
        "nombre": "Queso x1Kg",
        "precio": 2200.75,
        "distribuidor": "Vea",
        "categoria": "Lacteos"
    }
];

let tituloDeLista = null;

// Plantillas para mostrar diferentes tipos de listas (General o Baratos)
function mostrarEnHTML(id, tituloSection, listaDeProductos) {
    const lista = document.getElementById(id);

    // Si ya hay un título en la lista, no lo agregamos nuevamente
    if (!tituloDeLista) {
        const titulo = document.createElement('h2');
        titulo.textContent = tituloSection;
        titulo.classList.add('sub-title');
        lista.parentNode.insertBefore(titulo, lista);
        tituloDeLista = titulo;
    } else {
        tituloDeLista.textContent = tituloSection;
    }

    lista.innerHTML = '';

    listaDeProductos.forEach(producto => {
        const contenedorDeProducto = document.createElement('div');
        contenedorDeProducto.className = 'product-container';

        const nombre = document.createElement('p');
        nombre.textContent = `Producto: ${producto.nombre}`;

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio} pesos`;

        const categoria = document.createElement('p');
        categoria.textContent = `Categoria: ${producto.categoria}`;

        const distribuidor = document.createElement('p');
        distribuidor.textContent = `Distribuidor: ${producto.distribuidor || ''}`;

        contenedorDeProducto.appendChild(nombre);
        contenedorDeProducto.appendChild(precio);
        contenedorDeProducto.appendChild(categoria);
        contenedorDeProducto.appendChild(distribuidor);

        lista.appendChild(contenedorDeProducto);
    });
};

// Funcion para agregar un producto nuevo teniendo como oblicación de llenar todos los campos
function agregarProducto() {
    const nombre = document.getElementById('name').value;
    const precio = parseFloat(document.getElementById('price').value);
    let distribuidor = document.getElementById('market');
    let categoria = document.getElementById('categorie');

    if (nombre && precio && distribuidor && categoria && distribuidor.selectedIndex > 0 && categoria.selectedIndex > 0) {
        const distribuidorSel = distribuidor.options[distribuidor.selectedIndex].text;
        const categoriaSel = categoria.options[categoria.selectedIndex].text;

        const nuevoProducto = {
            "nombre": nombre,
            "precio": precio,
            "distribuidor": distribuidorSel,
            "categoria": categoriaSel
        };
        listaDeProductos.push(nuevoProducto);

        document.getElementById('product-form').reset();
        alert("¡Producto agregado correctamente!");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Filtro que devuelve los 3 productos más baratos
function filtroMenorPrecio() {
    ocultarListaDeProductos('product-list');

    listaDeProductos.sort((productoA, productoB) => productoA.precio - productoB.precio);

    mostrarEnHTML('product-list', 'Productos más económicos', listaDeProductos.slice(0, 3));
    alert("Estos son los 3 productos más económicos");
    listaVisible = true;
}

// Cambiar las listas para mejor visualización del usuario
let listaVisible = true;

function mostrarListaDeProductos() {
    ocultarListaDeProductos('product-list');

    mostrarEnHTML('product-list', 'Lista de Productos', listaDeProductos);
    listaVisible = true;
}

function ocultarListaDeProductos(id) {
    const lista = document.getElementById(id);

    if (lista) {
        lista.innerHTML = '';
    }
};