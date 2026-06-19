package com.techstore.backend.model;

import jakarta.persistence.*;

// @Entity le dice a Spring que esta clase representa una tabla en la base de datos
// @Table(name = "producto") define el nombre de la tabla
@Entity
@Table(name = "producto")
public class Producto {

    // @Id = clave primaria
    // @GeneratedValue = el id se asigna automáticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Campos compartidos por todos los tipos de producto
    private String categoria;   // notebook | celular | auricular | monitor | pc_escritorio
    private String nombre;
    private String marca;
    private Double precio;
    private Integer stock;
    private String imagen;

    // Campos específicos de Notebook y PC Escritorio
    private String procesador;

    @Column(name = "ram_gb")
    private Integer ramGB;

    @Column(name = "almacenamiento_gb")
    private Integer almacenamientoGB;

    // Compartido entre Notebook y Celular (pulgadas de pantalla)
    @Column(name = "pantalla_pulgadas")
    private Double pantallaPulgadas;

    // Campos específicos de Celular
    @Column(name = "bateria_mah")
    private Integer bateriaMah;

    @Column(name = "camara_mp")
    private Integer camaraMp;

    // Campos específicos de Auricular
    private String tipo;            // in-ear | over-ear | on-ear
    private Boolean wireless;
    @Column(name = "cancelacion_ruido")
    private Boolean cancelacionRuido;

    // Campos específicos de Monitor
    private Integer pulgadas;
    private String resolucion;      // 1080p | 1440p | 4K

    @Column(name = "panel_tipo")
    private String panelTipo;       // IPS | VA | TN

    private Integer hz;

    // Campos específicos de PC Escritorio
    @Column(name = "placa_video")
    private String placaVideo;

    @Column(name = "fuente_w")
    private Integer fuenteW;

    // ── Constructores ────────────────────────────────────────
    // Spring necesita el constructor vacío para poder crear instancias
    public Producto() {}

    // ── Getters y Setters ────────────────────────────────────
    // Spring los usa para serializar/deserializar JSON automáticamente

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }

    public String getImagen() { return imagen; }
    public void setImagen(String imagen) { this.imagen = imagen; }

    public String getProcesador() { return procesador; }
    public void setProcesador(String procesador) { this.procesador = procesador; }

    public Integer getRamGB() { return ramGB; }
    public void setRamGB(Integer ramGB) { this.ramGB = ramGB; }

    public Integer getAlmacenamientoGB() { return almacenamientoGB; }
    public void setAlmacenamientoGB(Integer almacenamientoGB) { this.almacenamientoGB = almacenamientoGB; }

    public Double getPantallaPulgadas() { return pantallaPulgadas; }
    public void setPantallaPulgadas(Double pantallaPulgadas) { this.pantallaPulgadas = pantallaPulgadas; }

    public Integer getBateriaMah() { return bateriaMah; }
    public void setBateriaMah(Integer bateriaMah) { this.bateriaMah = bateriaMah; }

    public Integer getCamaraMp() { return camaraMp; }
    public void setCamaraMp(Integer camaraMp) { this.camaraMp = camaraMp; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public Boolean getWireless() { return wireless; }
    public void setWireless(Boolean wireless) { this.wireless = wireless; }

    public Boolean getCancelacionRuido() { return cancelacionRuido; }
    public void setCancelacionRuido(Boolean cancelacionRuido) { this.cancelacionRuido = cancelacionRuido; }

    public Integer getPulgadas() { return pulgadas; }
    public void setPulgadas(Integer pulgadas) { this.pulgadas = pulgadas; }

    public String getResolucion() { return resolucion; }
    public void setResolucion(String resolucion) { this.resolucion = resolucion; }

    public String getPanelTipo() { return panelTipo; }
    public void setPanelTipo(String panelTipo) { this.panelTipo = panelTipo; }

    public Integer getHz() { return hz; }
    public void setHz(Integer hz) { this.hz = hz; }

    public String getPlacaVideo() { return placaVideo; }
    public void setPlacaVideo(String placaVideo) { this.placaVideo = placaVideo; }

    public Integer getFuenteW() { return fuenteW; }
    public void setFuenteW(Integer fuenteW) { this.fuenteW = fuenteW; }
}
