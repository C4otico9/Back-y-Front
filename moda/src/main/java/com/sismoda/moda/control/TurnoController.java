package com.sismoda.moda.control;


import com.sismoda.moda.dtos.TurnoDTO;
import com.sismoda.moda.mappers.TurnoMapper;
import com.sismoda.moda.modelo.Turno;
import com.sismoda.moda.servicio.TurnoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/turnos")
@CrossOrigin("*")
public class TurnoController {
    private final TurnoService servicekr;
    private final TurnoMapper mapperkr;
    @GetMapping
    public ResponseEntity<List<TurnoDTO>> findAll() {
        List<TurnoDTO> list = mapperkr.toDTOs(servicekr.findAll());
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<TurnoDTO> findById(@PathVariable("id") Long id) {
        Turno obj = servicekr.findById(id);
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody TurnoDTO dto) {
        Turno obj = servicekr.save(mapperkr.toEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdTurno()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<TurnoDTO> update(@Valid @PathVariable("id") Long id, @RequestBody TurnoDTO dto) {
        dto.setIdTurno(id);
        Turno obj = servicekr.update(id, mapperkr.toEntity(dto));
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        servicekr.delete(id);
        return ResponseEntity.noContent().build();
    }
}
