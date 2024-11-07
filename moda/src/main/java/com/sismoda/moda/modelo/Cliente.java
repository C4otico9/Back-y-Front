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
@Table(name = "moda_cliente")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private Long idCliente;
    @Column(name = "dnirucCliente", nullable = false, length = 11)
    private String dnirucCliente;
    @Column(name = "nombreCliente", nullable = false, length = 50)
    private String nombreCliente;
    @Column(name = "apellidoCliente", nullable = false, length = 50)
    private String apellidoCliente;
    @Column(name = "telefonoCliente", nullable = false, length = 9)
    private String telefonoCliente;
    @Column(name = "correoCliente", nullable = false, length = 50)
    private String correoCliente;
    @Column(name = "direccionCliente", nullable = false, length = 50)
    private String direccionCliente;
}
