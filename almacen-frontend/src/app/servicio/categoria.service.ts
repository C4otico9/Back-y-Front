import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {BehaviorSubject, Subject} from "rxjs";
import {Categoria} from "../modelo/Categoria";
import {GenericService} from "./generic.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends GenericService<Categoria>{
  protected krubject = new
  BehaviorSubject<Categoria[]>([]);
  private messageChange: Subject<string> = new
  Subject<string>;
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/categorias`);
  }
  setCategoríaChange(data: Categoria[]){
    this.krubject.next(data);
  }
  getCategoríaChange(){
    return this.krubject.asObservable();
  }
  setMessageChange(data: string){
    this.messageChange.next(data);
  }
  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
