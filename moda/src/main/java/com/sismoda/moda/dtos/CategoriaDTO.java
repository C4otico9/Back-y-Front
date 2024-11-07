package com.sismoda.moda.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CategoriaDTO {
    private Long idCategoria;
    @NotNull(message = "El nombreCategoria no puede ser nulo")
    private String nombreCategoria;
}
