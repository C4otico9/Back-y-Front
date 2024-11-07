import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MaterialModule} from "../../../material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {Proveedor} from "../../../modelo/Proveedor";
import {ProveedorService} from "../../../servicio/proveedor.service";

@Component({
  selector: 'app-form-proveedor',
  standalone: true,
  imports: [MaterialModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-proveedor.component.html',
  styleUrl: './form-proveedor.component.css'
})
export class FormProveedorComponent implements OnInit {
  @ViewChild('ProveedorForm') proveedorForm!: NgForm ;
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Proveedor,
    private krService: ProveedorService,
    private _dialogRef: MatDialogRef<FormProveedorComponent>
  ){}
  ngOnInit(): void {
    if(this.data!==undefined){
      console.log(this.data['nombre']);

      this.form = new FormGroup({
        idProveedor: new FormControl(this.data['idProveedor']),
        nombre: new FormControl(this.data['nombre'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });
    }else{
      this.form = new FormGroup({
        idProveedor: new FormControl(0),
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)])
      });
    }
  }
  close(){
    this._dialogRef.close();
  }
  operate(){
    const kr: Proveedor = new Proveedor();
    kr.idProveedor = this.form.value['idProveedor'];
    kr.nombre = this.form.value['nombre'];

    if(this.proveedorForm.valid){
      if(kr.idProveedor > 0){
        //UPDATE
        this.krService.update(kr.idProveedor, kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setProveedorChange(data);
            this.krService.setMessageChange('UPDATED!');
            this.close();
          });
      }else{
        //INSERT
        this.krService.save(kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setProveedorChange(data);
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
