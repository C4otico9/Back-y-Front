import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MaterialModule} from "../../../material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {switchMap} from "rxjs";
import {Producto} from "../../../modelo/Producto";
import {ProductoService} from "../../../servicio/producto.service";

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [MaterialModule, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.css'
})
export class FormProductoComponent implements OnInit {
  @ViewChild('ProductoForm') productoForm!: NgForm ;
  form: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Producto,
    private krService: ProductoService,
    private _dialogRef: MatDialogRef<FormProductoComponent>
  ){}
  ngOnInit(): void {
    if(this.data!==undefined){
      console.log(this.data['nombre']);
      console.log(this.data['cantidad']);
      console.log(this.data['categoria']);
      console.log(this.data['proveedor']);

      this.form = new FormGroup({
        idProducto: new FormControl(this.data['idProducto']),
        nombre: new FormControl(this.data['nombre'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        cantidad: new FormControl(this.data['cantidad'], [Validators.required]),
        categoria: new FormControl(this.data['categoria'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        proveedor: new FormControl(this.data['proveedor'], [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
      });
    }else{
      this.form = new FormGroup({
        idProducto: new FormControl(0),
        nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        cantidad: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
        proveedor: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)])
      });
    }
  }
  close(){
    this._dialogRef.close();
  }
  operate(){
    const kr: Producto = new Producto();
    kr.idProducto = this.form.value['idProducto'];
    kr.nombre = this.form.value['nombre'];
    kr.cantidad = this.form.value['cantidad'];
    kr.categoria = this.form.value['categoria'];
    kr.proveedor = this.form.value['proveedor'];

    if(this.productoForm.valid){
      if(kr.idProducto > 0){
        //UPDATE
        this.krService.update(kr.idProducto, kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setProductoChange(data);
            this.krService.setMessageChange('UPDATED!');
            this.close();
          });
      }else{
        //INSERT
        this.krService.save(kr)
          .pipe(switchMap( ()=> this.krService.findAll() ))
          .subscribe(data => {
            this.krService.setProductoChange(data);
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
