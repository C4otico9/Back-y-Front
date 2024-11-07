package com.sismoda.moda.control;


import com.sismoda.moda.dtos.TrabajadorDTO;

import com.sismoda.moda.mappers.TrabajadorMapper;

import com.sismoda.moda.modelo.Trabajador;

import com.sismoda.moda.servicio.TrabajadorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/trabajadores")
@CrossOrigin("*")
public class TrabajadorController {
    private final TrabajadorService servicekr;
    private final TrabajadorMapper mapperkr;
    @GetMapping
    public ResponseEntity<List<TrabajadorDTO>> findAll() {
        List<TrabajadorDTO> list = mapperkr.toDTOs(servicekr.findAll());
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<TrabajadorDTO> findById(@PathVariable("id") Long id) {
        Trabajador obj = servicekr.findById(id);
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody TrabajadorDTO dto) {
        Trabajador obj = servicekr.save(mapperkr.toEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdTrabajador()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<TrabajadorDTO> update(@Valid @PathVariable("id") Long id, @RequestBody TrabajadorDTO dto) {
        dto.setIdTrabajador(id);
        Trabajador obj = servicekr.update(id, mapperkr.toEntity(dto));
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        servicekr.delete(id);
        return ResponseEntity.noContent().build();
    }
}
