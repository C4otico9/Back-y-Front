package com.sismoda.moda.control;

import com.sismoda.moda.dtos.ProveedorDTO;
import com.sismoda.moda.mappers.ProveedorMapper;
import com.sismoda.moda.modelo.Proveedor;
import com.sismoda.moda.servicio.ProveedorService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/proveedores")
@CrossOrigin("*")
public class ProveedorController {
    private final ProveedorService productoService;
    private final ProveedorMapper proveedorMapper;
    @GetMapping
    public ResponseEntity<List<ProveedorDTO>> findAll() {
        List<ProveedorDTO> list = proveedorMapper.toDTOs(productoService.findAll());
        return ResponseEntity.ok(list);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProveedorDTO> findById(@PathVariable("id") Long id) {
        Proveedor obj = productoService.findById(id);
        return ResponseEntity.ok(proveedorMapper.toDTO(obj));
    }
    @PostMapping
    public ResponseEntity<Void> save(@Valid @RequestBody ProveedorDTO dto) {
        Proveedor obj = productoService.save(proveedorMapper.toEntity(dto));
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdProveedor()).toUri();
        return ResponseEntity.created(location).build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProveedorDTO> update(@Valid @PathVariable("id") Long id, @RequestBody ProveedorDTO dto) {
        dto.setIdProveedor(id);
        Proveedor obj = productoService.update(id, proveedorMapper.toEntity(dto));
        return ResponseEntity.ok(proveedorMapper.toDTO(obj));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        productoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
