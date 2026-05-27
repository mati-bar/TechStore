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

const catalogo = [
  new Producto(
    'MacBook Air M2', 'Apple', 2100000, 4,
    'https://images.unsplash.com/photo-1611186871525-5a0c4f200c34?w=400'
  ),
  new Producto(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
  ),
  new Producto(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
  ),
  new Producto(
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
  ),
  new Producto(
    'PC Gamer Entry Level', 'Armada', 1200000, 5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
  ),
];

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

  const liStock = document.createElement('li');
  liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';

// el appendChild nos permite vincular el código HTML creado en JS en nuestro HTML
  ul.appendChild(liMarca);
  ul.appendChild(liStock);

  // Botón
  const btn = document.createElement('button');
  btn.textContent = producto.estaDisponible ? 'Agregar al carrito' : 'Sin stock';
  btn.disabled    = !producto.estaDisponible;

  // Armar la tarjeta
  const info = document.createElement('div');
  info.className = 'tarjeta-info';
  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);

  article.appendChild(img);
  article.appendChild(info);

  return article;
}
