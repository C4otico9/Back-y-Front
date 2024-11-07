import { Injectable } from '@angular/core';
import {Proveedor} from "../modelo/Proveedor";
import {BehaviorSubject, Subject} from "rxjs";
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "./generic.service";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService extends GenericService<Proveedor>{

  protected krubject = new
  BehaviorSubject<Proveedor[]>([]);
  private messageChange: Subject<string> = new
  Subject<string>;
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/proveedores`);
  }
  setProveedorChange(data: Proveedor[]){
    this.krubject.next(data);
  }
  getProveedorChange(){
    return this.krubject.asObservable();
  }
  setMessageChange(data: string){
    this.messageChange.next(data);
  }
  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
