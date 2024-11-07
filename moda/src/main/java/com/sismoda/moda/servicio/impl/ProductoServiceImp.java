package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.dtos.ProductoDTO;
import com.sismoda.moda.mappers.ProductoMapper;
import com.sismoda.moda.modelo.Categoria;
import com.sismoda.moda.modelo.Producto;
import com.sismoda.moda.modelo.Proveedor;
import com.sismoda.moda.repositorio.*;
import com.sismoda.moda.servicio.ProductoService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class ProductoServiceImp extends CrudGenericoServiceImp<Producto, Long> implements ProductoService {
    private final ProductoRepository repo;

    @Override
    protected ICrudGenericoRepository<Producto, Long> getRepo() { return repo; }

    public Page<Producto> listaPage(Pageable pageable){
        return repo.findAll(pageable);
    }
}
