async function cargarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    try {
        const respuesta = await fetch(`http://localhost:8080/productos/${id}`);

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}`);
        }

        const producto = await respuesta.json();

        document.getElementById("detalle-producto").innerHTML = `
            <h2>${producto.nombre}</h2>
            <img src="${producto.imagen}" alt="${producto.nombre}" width="300">
            <p><strong>Marca:</strong> ${producto.marca}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Stock:</strong> ${producto.stock}</p>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
        `;
    } catch (error) {
        console.error(error);
        document.getElementById("detalle-producto").innerHTML =
            "<p>Error al cargar el producto.</p>";
    }
}

cargarDetalle();
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

