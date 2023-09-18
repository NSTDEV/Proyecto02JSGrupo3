const listaDeProductos = [
    {
        "nombre": "Arroz x1Kg",
        "precio": 500.99,
        "supermercado": "Vea",
        "categoria": "Alimentos secos"
    },
    {
        "nombre": "Leche x1L",
        "precio": 380.50,
        "supermercado": "Comodín",
        "categoria": "Lácteos"
    },
    {
        "nombre": "Pan",
        "precio": 500.00,
        "supermercado": "Disco",
        "categoria": "Panadería"
    },
    {
        "nombre": "Manzanas",
        "precio": 690.90,
        "supermercado": "Vea",
        "categoria": "Frutas y verduras"
    },
    {
        "nombre": "Detergente x500ml",
        "precio": 415.75,
        "supermercado": "Comodín",
        "categoria": "Limpieza"
    },
    {
        "nombre": "Carne de res x1Kg",
        "precio": 2500.00,
        "supermercado": "Vea",
        "categoria": "Carnes"
    },
    {
        "nombre": "Aceite de oliva x900ml",
        "precio": 1200.00,
        "supermercado": "Comodín",
        "categoria": "Aceites y condimentos"
    },
    {
        "nombre": "Yogur x900ml",
        "precio": 450.50,
        "supermercado": "Disco",
        "categoria": "Lácteos"
    },
    {
        "nombre": "Cerveza x1L",
        "precio": 580.00,
        "supermercado": "Obrero",
        "categoria": "Bebidas alcohólicas"
    },
    {
        "nombre": "Papel higiénico x4/u",
        "precio": 520.99,
        "supermercado": "Chango Más",
        "categoria": "Higiene"
    },
    {
        "nombre": "Huevos x12/u",
        "precio": 470.00,
        "supermercado": "Carrefour",
        "categoria": "Huevos y lácteos"
    },
    {
        "nombre": "Fideos x500g",
        "precio": 219.95,
        "supermercado": "Vea",
        "categoria": "Alimentos secos"
    },
    {
        "nombre": "Jabón de manos x400ml",
        "precio": 450.25,
        "supermercado": "Comodín",
        "categoria": "Limpieza"
    },
    {
        "nombre": "Tomates x1Kg",
        "precio": 450.00,
        "supermercado": "Disco",
        "categoria": "Frutas y verduras"
    },
    {
        "nombre": "Queso x1Kg",
        "precio": 2200.75,
        "supermercado": "Vea",
        "categoria": "Lácteos"
    }
];

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

        div.appendChild(nombreP);
        div.appendChild(precioP);
        div.appendChild(categoriaP);

        lista.appendChild(div);
    });
};

function mostrarListaDeProductos() {
    mostrarEnHTML('list-of-products', listaDeProductos);
};

function agregarProducto() {
    const nombre = document.getElementById('name').value;
    const precio = parseFloat(document.getElementById('price').value);
    const supermercado = document.getElementById('market').value;
    const categoria = document.getElementById('categorie').value;

    if (nombre && precio && supermercado && categoria) {
        const nuevoProducto = { "nombre": nombre, "precio": precio, "supermercado": supermercado, "categoria": categoria };
        listaDeProductos.push(nuevoProducto);

        mostrarListaDeProductos()
        document.getElementById('product-form').reset();
        alert("¡Producto agregado correctamente!");
    } else {
        alert("Por favor, complete todos los campos.");
    };
};

function filtroMenorPrecio() {
    listaDeProductos.sort((producto, menor) => producto.precio - menor.precio);
    productosMasEconomicos = listaDeProductos.slice(0, 5);

    mostrarEnHTML('low-prices', productosMasEconomicos)
    alert("Estos son los productos más económicos: ");
};