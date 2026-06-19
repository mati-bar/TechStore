let catalogo = [];
class Producto {
  #precio;
  #stock;
  
  constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca  = marca;
    this.#precio = precio;
    this.#stock = stock;
    this.imagen = imagen;
  }
  
  descripcion() {
    return `${this.nombre} — ${this.marca}`;
  }

  get precio() { return this.#precio; }
  set precio(v) {
    if (typeof v !== 'number' || v <= 0) {
      throw new Error(`Precio inválido: ${v}. Debe ser un número mayor a 0.`);
    }
    this.#precio = v;
  }
  
  get stock() { return this.#stock; }
  set stock(v) {
    if (!Number.isInteger(v) || v < 0) {
      throw new Error(`Stock inválido: ${v}. Debe ser un número entero mayor o igual a 0.`);
    }
    this.#stock = v;
  }

  get estaDisponible() {
    return this.#stock > 0;
  }
 
  get precioFormateado() {
    return `$${this.#precio.toLocaleString('es-AR')}`;
  }
 
  resumen() {
    const disponible = this.estaDisponible ? `${this.#stock} en stock` : 'Sin stock';
    return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
  }

  fichatecnica() {
    return `Nombre: ${this.nombre}, marca: ${this.marca}`;
  }
}


class Notebook extends Producto {
  constructor(nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB) {
    super(nombre, marca, precio, stock, imagen);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
  }
  fichatecnica() {
    return `Nombre: ${this.nombre}, procesador: ${this.procesador}`;
  }
}

class Celular extends Producto { // Buena práctica: Primera letra en Mayúscula para Clases
  constructor(nombre, marca, precio, stock, imagen, pantallaPulgadas, bateriaMah, camaraMp, almacenamientoGB) {
    super(nombre, marca, precio, stock, imagen);
    this.pantallaPulgadas = pantallaPulgadas;
    this.bateriaMah = bateriaMah;
    this.camaraMp = camaraMp;
    this.almacenamientoGB = almacenamientoGB;
  }
  fichatecnica() {
    return `Nombre: ${this.nombre}, pantalla: ${this.pantallaPulgadas} pulgadas`;
  }
}

class Auricular extends Producto {
  constructor(nombre, marca, precio, stock, imagen, tipo, wireless, cancelacionRuido) {
    super(nombre, marca, precio, stock, imagen);
    this.tipo = tipo;
    this.wireless = wireless;
    this.cancelacionRuido = cancelacionRuido;
  }
  fichatecnica() {
    return `Nombre: ${this.nombre}, tipo: ${this.tipo}`;
  }
}

class Monitor extends Producto {
  constructor(nombre, marca, precio, stock, imagen, pulgadas, resolucion, panelTipo, hz) {
    super(nombre, marca, precio, stock, imagen);
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.panelTipo = panelTipo;
    this.hz = hz;
  }
  fichatecnica() {
    return `Nombre: ${this.nombre}, pulgadas: ${this.pulgadas}`;
  }
}

class PCEscritorio extends Producto {
  constructor(nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, placaVideo, fuenteW) {
    super(nombre, marca, precio, stock, imagen);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.placaVideo = placaVideo;
    this.fuenteW = fuenteW;
  }
  fichatecnica() {
    return `Nombre: ${this.nombre}, RAM: ${this.ramGB} GB`;
  }
}



// const catalogo = [
//   new Producto(
//     'MacBook Air M2', 'Apple', 2100000, 4,
//     'https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg?w=1024'
//   ),
//   new Producto(
//     'iPhone 15', 'Apple', 1650000, 12,
//     'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
//   ),
//   new Producto(
//     'Sony WH-1000XM5', 'Sony', 420000, 0,
//     'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
//   ),
//   new Producto(
//     'LG UltraGear 27GP850', 'LG', 480000, 6,
//     'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
//   ),
//   new Producto(
//     'PC Gamer Entry Level', 'Armada', 1200000, 5,
//     'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
//   ),
//   new Producto(
//     'Samsung Galaxy S24 Ultra', 'Samsung', 1950000, 8,
//     'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400'
//   ),
//   new Producto(
//     'Teclado Mecanico Redragon Kumara K552', 'Redragon', 45000, 15,
//     'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400'
//   ),
//   new Producto(
//     'PlayStation 5 Slim', 'Sony', 1100000, 3,
//     'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400'
//   ),
//   new Producto(
//     'iPad Air M1', 'Apple', 1250000, 7,
//     'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'
//   ),
//   new Producto(
//     'Mouse Logitech G305 LightSpeed', 'Logitech', 55000, 20,
//     'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400'
//   )

// ];


function crearTarjeta(producto) {

  // primero defino la etiqueta HTML que creo, luego defino
  // su clase (si quiero aplicarle estilos mediante CSS)
  // y por último el valor que toma (marca, precio, nombre, etc)

// document hace referencia al HTML
  const article = document.createElement('article');
  article.className = 'tarjeta'

  // Imagen del producto
 // defino su src (url) y el texto alternativo (alt)
  const img = document.createElement('img');
  img.src     = producto.imagen;
  img.alt     = producto.nombre;
  img.className = 'imagenCard'

  // Nombre
  const h3 = document.createElement('h3');
  h3.textContent = producto.nombre;

  const precio = document.createElement('p');
  precio.className = 'precio';
  precio.textContent = producto.precioFormateado;

  // Características básicas con lista
  const ul = document.createElement('ul');

  const liMarca = document.createElement('li');
  liMarca.textContent = `Marca: ${producto.marca}`;
  liMarca.className = 'marca';

  const liStock = document.createElement('li');
  liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';
    liStock.className = 'stock';

  const ficha = document.createElement('p');
  ficha.textContent = producto.fichatecnica();

// el appendChild nos permite vincular el código HTML creado en JS en nuestro HTML
  ul.appendChild(liMarca);
  ul.appendChild(liStock);
  ul.appendChild(ficha);

  // Botón carrito
  const btn = document.createElement('button');
  btn.textContent = producto.estaDisponible ? 'Agregar al carrito 🛒' : 'Sin stock';
  btn.disabled    = !producto.estaDisponible;
  btn.className   = 'btn-agregar';

  const btnDetalle = document.createElement('button');
  btnDetalle.textContent = 'Ver detalle';
  btnDetalle.className   = 'btn-detalle';

  // el window.location.href se refiere a la ventana actual. si le asigno un valor distinto,
  // me redirige a ese nuevo valor
  btnDetalle.addEventListener('click', () => {
    window.location.href = `producto.html?id=${producto.id}`;
  });

  // Armar la tarjeta
  const info = document.createElement('div');
  info.className = 'tarjeta-info';
  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);
  info.appendChild(btnDetalle);
  article.appendChild(img);
  article.appendChild(info);

  return article;
}
function renderizar (lista){
  const contenedorProductos = document.getElementById('productos');
  catalogo.forEach(producto => contenedorProductos.appendChild(crearTarjeta(producto)));
}



function crearProducto(d) {
  // definimos atributos base que no cambian por subclase de producto
  const base = [d.nombre, d.marca, d.precio, d.stock, d.imagen];
  let producto;
  switch (d.categoria) {
    case 'notebook':
      producto = new Notebook(...base, d.procesador, d.ramGB, d.almacenamientoGB, d.pantallaPulgadas);
      break;
    case 'celular':
      producto = new Celular(...base, d.pantallaPulgadas, d.bateriaMah, d.camaraMp, d.almacenamientoGB);
      break;
    case 'auricular':
      producto = new Auricular(...base, d.tipo, d.wireless, d.cancelacionRuido);
      break;
    case 'monitor':
      producto = new Monitor(...base, d.pulgadas, d.resolucion, d.panelTipo, d.hz);
      break;
    case 'pc_escritorio':
      producto = new PCEscritorio(...base, d.procesador, d.ramGB, d.almacenamientoGB, d.placaVideo, d.fuenteW);
      break;
    default:
      producto = new Producto(...base);
  }
  // aca definimos que tome el id del producto que viene del back
  producto.id = d.id;
  return producto;
}

// ── Fetch ─────────────────────────────────────────────────────
// async porque va a ser una funcion asincrona
async function cargarProductos() {
  try {
    // la funcion fetch nos permite realizar peticiones al backend
    // await porque al ser cargarProductos una funcion asincrona, debemos esperar
    // a que la respuesta venga
    const respuesta = await fetch('http://localhost:8080/productos');
    if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);

    // convertimos datos a json para poder utilizarlos
    const datos = await respuesta.json();

    // si hacemos un console.log acá y salió todo bien, vamos a obtener los productos
    // que se encuentran en la base de datos
    console.log(datos)

    // convertimos cada uno de los productos obtenidos del backend 
    // a un objeto de su tipo. ej. si la categoria que viene del back es "notebook",
    // entonces en crearProducto debemos crear la instancia de subclase notebook.
    catalogo = datos.map(d => crearProducto(d));
    renderizar(catalogo)

  } catch (error) {
    console.error('No se pudo cargar:', error.message);
    contenedor_filtrado.innerHTML =
      '<p style="color:#C0392B;padding:16px">⚠️ No se pudo conectar con el servidor.</p>';
  }
}
cargarProductos()

// ── Eventos ───────────────────────────────────────────────────

// Botones de categoría
botones.forEach(btn => {
  btn.addEventListener('click', () => {
    categoriaActiva = btn.dataset.categoria;
    sincronizarBotones(categoriaActiva);
    guardarFiltro(categoriaActiva);
    aplicarFiltros();
  });
});

// Buscador
buscador.addEventListener('input', () => {
  textoBusqueda = buscador.value.toLowerCase().trim();
  aplicarFiltros();
});

// Limpiar búsqueda
btnLimpiarBusqueda.addEventListener('click', () => {
  buscador.value = '';
  textoBusqueda  = '';
  aplicarFiltros();
});

// Limpiar todos los filtros
btnLimpiarFiltros.addEventListener('click', () => {
  categoriaActiva = 'todos';
  textoBusqueda   = '';
  buscador.value  = '';
  guardarFiltro('todos');
  sincronizarBotones('todos');
  aplicarFiltros();
});
