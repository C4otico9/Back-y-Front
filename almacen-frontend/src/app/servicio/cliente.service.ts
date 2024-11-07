import { Injectable } from '@angular/core';
import {Cliente} from "../modelo/Cliente";
import {BehaviorSubject, Subject} from "rxjs";
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "./generic.service";

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends GenericService<Cliente>{

  protected krubject = new
  BehaviorSubject<Cliente[]>([]);
  private messageChange: Subject<string> = new
  Subject<string>;
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/clientes`);
  }
  setClienteChange(data: Cliente[]){
    this.krubject.next(data);
  }
  getClienteChange(){
    return this.krubject.asObservable();
  }
  setMessageChange(data: string){
    this.messageChange.next(data);
  }
  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
