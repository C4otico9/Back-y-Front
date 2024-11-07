package com.sismoda.moda.control;

import com.sismoda.moda.dtos.CargoDTO;
import com.sismoda.moda.mappers.CargoMapper;
import com.sismoda.moda.modelo.Cargo;
import com.sismoda.moda.servicio.CargoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/cargos")
@CrossOrigin("*")
public class CargoController {
    private final CargoService servicekr;
    private final CargoMapper mapperkr;
    @GetMapping
    public ResponseEntity<List<CargoDTO>> findAll() {
        List<CargoDTO> list = mapperkr.toDTOs(servicekr.findAll());
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CargoDTO> findById(@PathVariable("id") Long id) {
        Cargo obj = servicekr.findById(id);
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody CargoDTO dto) {
        Cargo obj = servicekr.save(mapperkr.toEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdCargo()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<CargoDTO> update(@Valid @PathVariable("id") Long id, @RequestBody CargoDTO dto) {
        dto.setIdCargo(id);
        Cargo obj = servicekr.update(id, mapperkr.toEntity(dto));
        return ResponseEntity.ok(mapperkr.toDTO(obj));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        servicekr.delete(id);
        return ResponseEntity.noContent().build();
    }
}
