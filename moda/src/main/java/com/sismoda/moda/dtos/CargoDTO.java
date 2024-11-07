package com.sismoda.moda.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CargoDTO {
    private Long idCargo;
    @NotNull(message = "El nombreCargo no puede ser nulo")
    private String nombreCargo;
}
