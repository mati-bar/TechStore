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
// ── localStorage ──────────────────────────────────────────────
function guardarFiltro(categoria) {
  if (categoria && categoria !== 'todos') {
    localStorage.setItem('filtroActivo', categoria);
  } else {
    localStorage.removeItem('filtroActivo');
  }
}

// window.addEventListener('beforeunload', () => {
//   localStorage.removeItem('filtroActivo');
// });

// En cada link del nav que NO sea productos.html
// agregar un listener que limpie al hacer clic
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    // if (!link.href.includes('productos.html')) {
      localStorage.removeItem('filtroActivo');
    // }
  });
});

// ── Sincronizar botones ───────────────────────────────────────
function sincronizarBotones(categoria) {
  botones.forEach(b => {
    b.classList.toggle('activo', b.dataset.categoria === categoria);
  });
}

// ── Filtrado ──────────────────────────────────────────────────
function aplicarFiltros() {
  let resultado = catalogo_completo;

  if (categoriaActiva !== 'todos') {
    resultado = resultado.filter(p => {
      const tipo = p.constructor.name.toLowerCase();
      if (categoriaActiva === 'pc_escritorio') return tipo === 'pcescritorio';
      return tipo === categoriaActiva;
    });
  }

  if (textoBusqueda) {
    resultado = resultado.filter(p =>
      p.nombre.toLowerCase().includes(textoBusqueda) ||
      p.marca.toLowerCase().includes(textoBusqueda)
    );
  }

  renderizar(resultado);
  contador.textContent = `${resultado.length} producto${resultado.length !== 1 ? 's' : ''}`;
}

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