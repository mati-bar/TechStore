package com.techstore.backend.repository;

import com.techstore.backend.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// JpaRepository ya tiene todos los métodos básicos:
// findAll(), findById(), save(), deleteById(), etc.
// No hace falta escribir SQL — Spring lo genera automáticamente

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    // Métodos personalizados — Spring genera el SQL por el nombre del método

    // SELECT * FROM producto WHERE categoria = ?
    List<Producto> findByCategoria(String categoria);

    // SELECT * FROM producto WHERE marca = ?
    List<Producto> findByMarca(String marca);

    // SELECT * FROM producto WHERE stock > 0
    List<Producto> findByStockGreaterThan(Integer stock);
}
