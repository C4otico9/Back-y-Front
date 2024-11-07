package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.ClienteDTO;
import com.sismoda.moda.modelo.Cliente;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends GenericMapper <ClienteDTO, Cliente> {
}
