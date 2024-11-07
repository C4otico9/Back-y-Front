import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MaterialModule} from "../../../material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {Cliente} from "../../../modelo/Cliente";
import {ClienteService} from "../../../servicio/cliente.service";
@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [MaterialModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css'
})
export class FormClienteComponent implements OnInit {
  @ViewChild('ClienteForm') clienteForm!: NgForm ;
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Cliente,
    private krService: ClienteService,
    private _dialogRef: MatDialogRef<FormClienteComponent>
  ){}
  ngOnInit(): void {
    if(this.data!==undefined){
      console.log(this.data['dnirucCliente']);
      console.log(this.data['nombreCliente']);
      console.log(this.data['apellidoCliente']);
      console.log(this.data['telefonoCliente']);
      console.log(this.data['correoCliente']);
      console.log(this.data['direccionCliente']);

      this.form = new FormGroup({
        idCliente: new FormControl(this.data['idCliente']),
        dnirucCliente: new FormControl(this.data['dnirucCliente'], [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
        nombreCliente: new FormControl(this.data['nombreCliente'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        apellidoCliente: new FormControl(this.data['apellidoCliente'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        telefonoCliente: new FormControl(this.data['telefonoCliente'], [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
        correoCliente: new FormControl(this.data['correoCliente'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        direccionCliente: new FormControl(this.data['direccionCliente'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });
    }else{
      this.form = new FormGroup({
        idCliente: new FormControl(0),
        dnirucCliente: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
        nombreCliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        apellidoCliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        telefonoCliente: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
        correoCliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        direccionCliente: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)])

      });
    }
  }
  close(){
    this._dialogRef.close();
  }
  operate(){
    const kr: Cliente = new Cliente();
    kr.idCliente = this.form.value['idCliente'];
    kr.dnirucCliente = this.form.value['dnirucCliente'];
    kr.nombreCliente = this.form.value['nombreCliente'];
    kr.apellidoCliente = this.form.value['apellidoCliente'];
    kr.telefonoCliente = this.form.value['telefonoCliente'];
    kr.correoCliente = this.form.value['correoCliente'];
    kr.direccionCliente = this.form.value['direccionCliente'];

    if(this.clienteForm.valid){
      if(kr.idCliente > 0){
        //UPDATE
        this.krService.update(kr.idCliente, kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setClienteChange(data);
            this.krService.setMessageChange('UPDATED!');
            this.close();
          });
      }else{
        //INSERT
        this.krService.save(kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setClienteChange(data);
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
