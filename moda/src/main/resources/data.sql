-- Insertar datos en la tabla `moda_cargo`
INSERT INTO `moda_cargo` (`nombre_cargo`) VALUES
                                              ('Gerente'),
                                              ('Vendedor'),
                                              ('Cajero'),
                                              ('Almacenero'),
                                              ('Administrador');

-- Insertar datos en la tabla `moda_categoria`
INSERT INTO `moda_categoria` (`nombre_categoria`) VALUES
                                                      ('Pantalones'),
                                                      ('Camisas'),
                                                      ('Zapatos'),
                                                      ('Vestidos'),
                                                      ('Accesorios');

-- Insertar datos en la tabla `moda_cliente`
INSERT INTO `moda_cliente` (`apellido_cliente`, `correo_cliente`, `direccion_cliente`, `dniruc_cliente`, `nombre_cliente`, `telefono_cliente`) VALUES
                                                                                                                                                   ('Ramirez', 'juan.ramirez@example.com', 'Av. Siempreviva 123', '789456123', 'Juan', '987654321'),
                                                                                                                                                   ('Perez', 'ana.perez@example.com', 'Calle Falsa 456', '456789123', 'Ana', '963852741'),
                                                                                                                                                   ('Gomez', 'pedro.gomez@example.com', 'Jr. Sin Nombre 789', '123456789', 'Pedro', '951236874');


-- Insertar datos en la tabla `moda_producto`
INSERT INTO `moda_producto` (`cantidad`, `categoria`, `nombre`, `precioventa`, `proveedor`) VALUES
                                                                                                (100, 'Pantalones', 'Pantalón Jeans', 80.50, 'Proveedor A'),
                                                                                                (50, 'Camisas', 'Camisa Formal', 60.00, 'Proveedor B'),
                                                                                                (30, 'Zapatos', 'Zapatillas Urbanas', 120.75, 'Proveedor C'),
                                                                                                (80, 'Vestidos', 'Vestido Casual', 90.25, 'Proveedor A'),
                                                                                                (200, 'Accesorios', 'Cinturón de Cuero', 25.00, 'Proveedor B');


-- Insertar datos en la tabla `moda_proveedor`
INSERT INTO `moda_proveedor` (`nombre`) VALUES
                                            ('Proveedor A'),
                                            ('Proveedor B'),
                                            ('Proveedor C'),
                                            ('Proveedor D');

-- Insertar datos en la tabla `moda_trabajador`
INSERT INTO `moda_trabajador` (`apellido`, `cargo`, `contrasena`, `nombre`, `turno`) VALUES
                                                                                         ('Quispe', 'Gerente', 'contraseña1', 'Juan', 'Mañana'),
                                                                                         ('Condori', 'Vendedor', 'contraseña2', 'Maria', 'Tarde'),
                                                                                         ('Mamani', 'Cajero', 'contraseña3', 'Pedro', 'Noche');

-- Insertar datos en la tabla `moda_turno`
INSERT INTO `moda_turno` (`nombre`) VALUES
                                        ('Mañana'),
                                        ('Tarde'),
                                        ('Noche');