package com.sismoda.moda.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductoDTO {
    private Long idProducto;
    @NotNull(message = "El nombre no puede ser nulo")
    private String nombre;
    @NotNull(message = "El cantidad no puede ser nulo")
    private double cantidad;
    @NotNull(message = "El categoria no puede ser nulo")
    private String categoria;
    @NotNull(message = "El proveedor no puede ser nulo")
    private String proveedor;
}
