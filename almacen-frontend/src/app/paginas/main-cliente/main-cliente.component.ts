import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {Cliente} from "../../modelo/Cliente";
import {ClienteService} from "../../servicio/cliente.service";
import {FormClienteComponent} from "./form-cliente/form-cliente.component";

@Component({
  selector: 'app-main-cliente',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink],
  templateUrl: './main-cliente.component.html',
  styleUrl: './main-cliente.component.css'
})
export class MainClienteComponent implements OnInit {
  dataSource: MatTableDataSource<Cliente>;
  columnsDefinitions = [
    { def: 'idCliente', label: 'idCliente', hide: true},
    { def: 'dnirucCliente', label: 'dnirucCliente', hide: false},
    { def: 'nombreCliente', label: 'nombreCliente', hide: false},
    { def: 'apellidoCliente', label: 'apellidoCliente', hide: false},
    { def: 'telefonoCliente', label: 'telefonoCliente', hide: false},
    { def: 'correoCliente', label: 'correoCliente', hide: false},
    { def: 'direccionCliente', label: 'direccionCliente', hide: false},
    { def: 'acciones', label: 'acciones', hide: false}
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private krervice: ClienteService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){}
  ngOnInit(): void {
    this.krervice.findAll().subscribe(data => this.createTable(data));

    this.krervice.getClienteChange().subscribe(data => this.createTable(data));
    this.krervice.getMessageChange().subscribe(data => this._snackBar.open(data, 'INFO', {duration: 2000}))
  }

  createTable(data: Cliente[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getDisplayedColumns(){
    return this.columnsDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }
  openDialog(krentidad?: Cliente){
    this._dialog.open(FormClienteComponent, {
      width: '750px',
      data: krentidad,
      disableClose: true
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(idMedic: number){
    this.krervice.delete(idMedic)
      .pipe(switchMap( ()=> this.krervice.findAll()))
      .subscribe(data => {
        this.krervice.setClienteChange(data);
        this.krervice.setMessageChange('DELETED!');
      });
  }
}
