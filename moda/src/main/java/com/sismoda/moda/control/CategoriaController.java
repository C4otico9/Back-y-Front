package com.sismoda.moda.control;

import com.sismoda.moda.dtos.CategoriaDTO;
import com.sismoda.moda.mappers.CategoriaMapper;
import com.sismoda.moda.modelo.Categoria;
import com.sismoda.moda.servicio.CategoriaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/categorias")
@CrossOrigin("*")
public class CategoriaController {
    private final CategoriaService servicekr;
    private final CategoriaMapper mapperkr;
    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> findAll() {
        List<CategoriaDTO> list = mapperkr.toDTOs(servicekr.findAll());
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> findById(@PathVariable("id") Long id) {
        Categoria obj = servicekr.findById(id);
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody CategoriaDTO dto) {
        Categoria obj = servicekr.save(mapperkr.toEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdCategoria()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<CategoriaDTO> update(@Valid @PathVariable("id") Long id, @RequestBody CategoriaDTO dto) {
        dto.setIdCategoria(id);
        Categoria obj = servicekr.update(id, mapperkr.toEntity(dto));
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        servicekr.delete(id);
        return ResponseEntity.noContent().build();
    }
}
