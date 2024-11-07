package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.CategoriaDTO;
import com.sismoda.moda.modelo.Categoria;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoriaMapper extends GenericMapper<CategoriaDTO, Categoria> {
}
