package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.modelo.Cargo;
import com.sismoda.moda.repositorio.CargoRepository;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.servicio.CargoService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class CargoServiceImp extends CrudGenericoServiceImp<Cargo, Long> implements CargoService {
    private final CargoRepository repo;

    @Override
    protected ICrudGenericoRepository<Cargo, Long> getRepo() { return repo; }

    public Page<Cargo> listaPage(Pageable pageable){
        return repo.findAll(pageable);
    }
}
