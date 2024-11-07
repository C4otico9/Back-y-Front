package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.modelo.Cliente;
import com.sismoda.moda.repositorio.ClienteRepository;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.servicio.ClienteService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class ClienteServiceImp extends CrudGenericoServiceImp<Cliente, Long> implements ClienteService {
    private final ClienteRepository repo;

    @Override
    protected ICrudGenericoRepository<Cliente, Long> getRepo() { return repo; }

    public Page<Cliente> listaPage(Pageable pageable){
        return repo.findAll(pageable);
    }

}
