package com.sismoda.moda.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClienteDTO {
    private Long idCliente;
    @NotNull(message = "El dnirucCliente no puede ser nulo")
    private String dnirucCliente;
    @NotNull(message = "El nombreCliente no puede ser nulo")
    private String nombreCliente;
    @NotNull(message = "El apellidoCliente no puede ser nulo")
    private String apellidoCliente;
    @NotNull(message = "El telefonoCliente no puede ser nulo")
    private String telefonoCliente;
    @NotNull(message = "El correoCliente no puede ser nulo")
    private String correoCliente;
    @NotNull(message = "El direccionCliente no puede ser nulo")
    private String direccionCliente;


}
