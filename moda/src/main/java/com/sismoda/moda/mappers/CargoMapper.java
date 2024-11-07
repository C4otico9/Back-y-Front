package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.CargoDTO;
import com.sismoda.moda.modelo.Cargo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CargoMapper extends GenericMapper<CargoDTO, Cargo> {
}
