package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.TurnoDTO;
import com.sismoda.moda.modelo.Turno;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TurnoMapper extends GenericMapper<TurnoDTO, Turno>{
}
