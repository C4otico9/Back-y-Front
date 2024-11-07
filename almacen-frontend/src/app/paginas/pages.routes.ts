import { Routes } from '@angular/router';
import {MainCargoComponent} from "./main-cargo/main-cargo.component";
import {FormCargoComponent} from "./main-cargo/form-cargo/form-cargo.component";
import {MainClienteComponent} from "./main-cliente/main-cliente.component";
import {FormClienteComponent} from "./main-cliente/form-cliente/form-cliente.component";
import {MainTurnoComponent} from "./main-turno/main-turno.component";
import {FormTurnoComponent} from "./main-turno/form-turno/form-turno.component";
import {MainTrabajadorComponent} from "./main-trabajador/main-trabajador.component";
import {FormTrabajadorComponent} from "./main-trabajador/form-trabajador/form-trabajador.component";
import {MainProveedorComponent} from "./main-proveedor/main-proveedor.component";
import {FormProveedorComponent} from "./main-proveedor/form-proveedor/form-proveedor.component";
import {MainProductoComponent} from "./main-producto/main-producto.component";
import {FormProductoComponent} from "./main-producto/form-producto/form-producto.component";
import {MainCategoriaComponent} from "./main-categoria/main-categoria.component";
import {FormCategoriaComponent} from "./main-categoria/form-categoria/form-categoria.component";

export const pagesRoutes: Routes = [
  {
    path: 'cargo',
    component: MainCargoComponent,
    children: [
      { path: 'new', component: FormCargoComponent },
      { path: 'edit/:id', component: FormCargoComponent },
    ],
  },
  {
    path: 'categoría',
    component: MainCategoriaComponent,
    children: [
      { path: 'new', component: FormCategoriaComponent },
      { path: 'edit/:id', component: FormCategoriaComponent },
    ],
  },
  {
    path: 'producto',
    component: MainProductoComponent,
    children: [
      { path: 'new', component: FormProductoComponent },
      { path: 'edit/:id', component: FormProductoComponent },
    ],
  },
  {
    path: 'proveedor',
    component: MainProveedorComponent,
    children: [
      { path: 'new', component: FormProveedorComponent },
      { path: 'edit/:id', component: FormProveedorComponent },
    ],
  },
  {
    path: 'trabajador',
    component: MainTrabajadorComponent,
    children: [
      { path: 'new', component: FormTrabajadorComponent },
      { path: 'edit/:id', component: FormTrabajadorComponent },
    ],
  },
  {
    path: 'turno',
    component: MainTurnoComponent,
    children: [
      { path: 'new', component: FormTurnoComponent },
      { path: 'edit/:id', component: FormTurnoComponent },
    ],
  },
  {
    path: 'cliente',
    component: MainClienteComponent,
    children: [
      { path: 'new', component: FormClienteComponent },
      { path: 'edit/:id', component: FormClienteComponent },
    ],
  },

];
