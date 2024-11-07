package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.ProveedorDTO;
import com.sismoda.moda.modelo.Proveedor;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProveedorMapper extends GenericMapper<ProveedorDTO, Proveedor> {
}
