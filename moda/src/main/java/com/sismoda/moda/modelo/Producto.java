package com.sismoda.moda.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "moda_producto")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Long idProducto;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;
    @Column(name = "cantidad", nullable = false)
    private double cantidad;
    @Column(name = "categoria", nullable = false, length = 50)
    private String categoria;
    @Column(name = "proveedor", nullable = false, length = 50)
    private String proveedor;

}
