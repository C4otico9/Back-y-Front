import {Component, OnInit, ViewChild} from '@angular/core';
import {MaterialModule} from "../../material/material.module";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Turno} from "../../modelo/Turno";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TurnoService} from "../../servicio/turno.service";
import {switchMap} from "rxjs";
import {FormTurnoComponent} from "./form-turno/form-turno.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-main-turno',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterLink],
  templateUrl: './main-turno.component.html',
  styleUrl: './main-turno.component.css'
})
export class MainTurnoComponent  implements OnInit {

  dataSource: MatTableDataSource<Turno>;

  columnsDefinitions = [
    { def: 'idTurno', label: 'idTurno', hide: true},
    { def: 'nombre', label: 'nombre', hide: false},
    { def: 'acciones', label: 'acciones', hide: false}
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private krervice: TurnoService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.krervice.findAll().subscribe(data => this.createTable(data));

    this.krervice.getTurnoChange().subscribe(data => this.createTable(data));
    this.krervice.getMessageChange().subscribe(data => this._snackBar.open(data, 'INFO', {duration: 2000}))
  }

  createTable(data: Turno[]){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDisplayedColumns(){
    return this.columnsDefinitions.filter(cd => !cd.hide).map(cd => cd.def);
  }

  openDialog(turno?: Turno){
    this._dialog.open(FormTurnoComponent, {
      width: '750px',
      data: turno,
      disableClose: true
    });
  }


  delete(idMedic: number){
    this.krervice.delete(idMedic)
      .pipe(switchMap( ()=> this.krervice.findAll()))
      .subscribe(data => {
        this.krervice.setTurnoChange(data);
        this.krervice.setMessageChange('DELETED!');
      });
  }

}
