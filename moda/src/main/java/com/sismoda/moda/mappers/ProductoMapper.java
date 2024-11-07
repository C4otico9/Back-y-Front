package com.sismoda.moda.mappers;

import com.sismoda.moda.dtos.ProductoDTO;
import com.sismoda.moda.modelo.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductoMapper extends GenericMapper<ProductoDTO, Producto> {

}
