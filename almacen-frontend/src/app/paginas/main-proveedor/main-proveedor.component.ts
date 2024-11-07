import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {Proveedor} from "../../modelo/Proveedor";
import {ProveedorService} from "../../servicio/proveedor.service";
import {FormProveedorComponent} from "./form-proveedor/form-proveedor.component";

@Component({
  selector: 'app-main-proveedor',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink],
  templateUrl: './main-proveedor.component.html',
  styleUrl: './main-proveedor.component.css'
})
export class MainProveedorComponent implements OnInit {
  dataSource: MatTableDataSource<Proveedor>;
  columnsDefinitions = [
    { def: 'idProveedor', label: 'idProveedor', hide: true},
    { def: 'nombre', label: 'nombre', hide: false},
    { def: 'acciones', label: 'acciones', hide: false}
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private krervice: ProveedorService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){}
  ngOnInit(): void {
    this.krervice.findAll().subscribe(data => this.createTable(data));

    this.krervice.getProveedorChange().subscribe(data => this.createTable(data));
    this.krervice.getMessageChange().subscribe(data => this._snackBar.open(data, 'INFO', {duration: 2000}))
  }
  createTable(data: Proveedor[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getDisplayedColumns(){
    return this.columnsDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }
  openDialog(krentidad?: Proveedor){
    this._dialog.open(FormProveedorComponent, {
      width: '750px',
      data: krentidad,
      disableClose: true
    });
  }
  delete(idMedic: number){
    this.krervice.delete(idMedic)
      .pipe(switchMap( ()=> this.krervice.findAll()))
      .subscribe(data => {
        this.krervice.setProveedorChange(data);
        this.krervice.setMessageChange('DELETED!');
      });
  }
}
