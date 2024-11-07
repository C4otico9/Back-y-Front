import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MaterialModule} from "../../../material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {Trabajador} from "../../../modelo/Trabajador";
import {TrabajadorService} from "../../../servicio/trabajador.service";

@Component({
  selector: 'app-form-trabajador',
  standalone: true,
  imports: [MaterialModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-trabajador.component.html',
  styleUrl: './form-trabajador.component.css'
})
export class FormTrabajadorComponent implements OnInit {
  @ViewChild('TrabajadorForm') trabajadorForm!: NgForm ;
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Trabajador,
    private krService: TrabajadorService,
    private _dialogRef: MatDialogRef<FormTrabajadorComponent>
  ){}
  ngOnInit(): void {
    if(this.data!==undefined){
      console.log(this.data['nombre']);
      console.log(this.data['apellido']);
      console.log(this.data['contrasena']);
      console.log(this.data['cargo']);
      console.log(this.data['turno']);

      this.form = new FormGroup({
        idTrabajador: new FormControl(this.data['idTrabajador']),
        nombre: new FormControl(this.data['nombre'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        apellido: new FormControl(this.data['apellido'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        contrasena: new FormControl(this.data['contrasena'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        cargo: new FormControl(this.data['cargo'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        turno: new FormControl(this.data['turno'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });
    }else{
      this.form = new FormGroup({
        idTrabajador: new FormControl(0),

        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        contrasena: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        cargo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        turno: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)])
      });
    }
  }
  close(){
    this._dialogRef.close();
  }
  operate(){
    const kr: Trabajador = new Trabajador();
    kr.idTrabajador = this.form.value['idTrabajador'];
    kr.nombre = this.form.value['nombre'];
    kr.apellido = this.form.value['apellido'];
    kr.contrasena = this.form.value['contrasena'];
    kr.cargo = this.form.value['cargo'];
    kr.turno = this.form.value['turno'];

    if(this.trabajadorForm.valid){
      if(kr.idTrabajador > 0){
        //UPDATE
        this.krService.update(kr.idTrabajador, kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setTrabajadorChange(data);
            this.krService.setMessageChange('UPDATED!');
            this.close();
          });
      }else{
        //INSERT
        this.krService.save(kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setTrabajadorChange(data);
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
