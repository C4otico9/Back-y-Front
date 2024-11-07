package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.modelo.Turno;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.repositorio.TurnoRepository;
import com.sismoda.moda.servicio.TurnoService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class TurnoServiceImp extends CrudGenericoServiceImp<Turno, Long> implements TurnoService {
    private final TurnoRepository cargoRepository;

    @Override
    protected ICrudGenericoRepository<Turno, Long> getRepo() { return cargoRepository; }

    public Page<Turno> listaPage(Pageable pageable){
        return cargoRepository.findAll(pageable);
    }
}

