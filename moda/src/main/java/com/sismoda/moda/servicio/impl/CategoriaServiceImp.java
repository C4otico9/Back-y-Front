package com.sismoda.moda.servicio.impl;

import com.sismoda.moda.modelo.Categoria;
import com.sismoda.moda.repositorio.CategoriaRepository;
import com.sismoda.moda.repositorio.ICrudGenericoRepository;
import com.sismoda.moda.servicio.CategoriaService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoriaServiceImp extends CrudGenericoServiceImp<Categoria, Long> implements CategoriaService {
    private final CategoriaRepository categoriaRepository;

    @Override
    protected ICrudGenericoRepository<Categoria, Long> getRepo() { return categoriaRepository; }

    public Page<Categoria> listaPage(Pageable pageable){
        return categoriaRepository.findAll(pageable);
    }
}


