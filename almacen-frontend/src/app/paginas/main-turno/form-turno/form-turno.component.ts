import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TurnoService} from "../../../servicio/turno.service";
import {Turno} from "../../../modelo/Turno";
import {switchMap} from "rxjs";
import {MaterialModule} from "../../../material/material.module";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-form-turno',
  standalone: true,
  imports: [MaterialModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-turno.component.html',
  styleUrl: './form-turno.component.css'
})
export class FormTurnoComponent implements OnInit {
  @ViewChild('TurnoForm') turnoForm!: NgForm ;
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Turno,
    private krService: TurnoService,
    private _dialogRef: MatDialogRef<FormTurnoComponent>

  ){}
  ngOnInit(): void {
    if(this.data!==undefined){
      console.log(this.data['nombre']);

      this.form = new FormGroup({
        idTurno: new FormControl(this.data['idTurno']),
        nombre: new FormControl(this.data['nombre'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });


    }else{
      this.form = new FormGroup({
        idTurno: new FormControl(0),
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });
    }
  }

  close(){
    this._dialogRef.close();
  }

  operate(){
    const kr: Turno = new Turno();
    kr.idTurno = this.form.value['idTurno'];
    kr.nombre = this.form.value['nombre'];

    if(this.turnoForm.valid){
      if(kr.idTurno > 0){
        //UPDATE
        this.krService.update(kr.idTurno, kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setTurnoChange(data);
            this.krService.setMessageChange('UPDATED!');
            this.close();
          });

      }else{
        //INSERT
        this.krService.save(kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setTurnoChange(data);
            this.krService.setMessageChange('CREATED!');
            this.close();
          });
      }
    }else{
      console.log("Error....")
    }

  }

  get f(){
    return this.form.controls;
  }

}
