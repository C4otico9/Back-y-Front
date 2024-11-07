package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.dtos.TrabajadorDTO;
import com.sismoda.moda.mappers.TrabajadorMapper;
import com.sismoda.moda.modelo.Trabajador;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.repositorio.TrabajadorRepository;
import com.sismoda.moda.servicio.TrabajadorService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class TrabajadorServiceImp extends CrudGenericoServiceImp<Trabajador, Long> implements TrabajadorService {
    private final TrabajadorRepository repo;

    @Override
    protected ICrudGenericoRepository<Trabajador, Long> getRepo() { return repo; }

    public Page<Trabajador> listaPage(Pageable pageable){
        return repo.findAll(pageable);
    }
}
