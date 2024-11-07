package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.modelo.Proveedor;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.repositorio.ProveedorRepository;
import com.sismoda.moda.servicio.ProveedorService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class ProveedorServiceImp extends CrudGenericoServiceImp<Proveedor, Long> implements ProveedorService {
    private final ProveedorRepository proveedorRepository;

    @Override
    protected ICrudGenericoRepository<Proveedor, Long> getRepo() { return proveedorRepository; }

    public Page<Proveedor> listaPage(Pageable pageable){
        return proveedorRepository.findAll(pageable);
    }
}
