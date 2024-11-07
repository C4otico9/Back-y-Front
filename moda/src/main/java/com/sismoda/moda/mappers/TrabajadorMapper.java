package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.TrabajadorDTO;
import com.sismoda.moda.modelo.Trabajador;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TrabajadorMapper extends GenericMapper<TrabajadorDTO, Trabajador> {

}
