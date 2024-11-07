import { Injectable } from '@angular/core';
import {Turno} from "../modelo/Turno";
import {BehaviorSubject, Subject} from "rxjs";
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {GenericService} from "./generic.service";

@Injectable({
  providedIn: 'root'
})
export class TurnoService extends GenericService<Turno> {

  protected krubject = new
  BehaviorSubject<Turno[]>([]);
  private messageChange: Subject<string> = new
  Subject<string>;
  constructor(protected override http: HttpClient) {
    super(http, `${environment.HOST}/turnos`);
  }
  setTurnoChange(data: Turno[]){
    this.krubject.next(data);
  }
  getTurnoChange(){
    return this.krubject.asObservable();
  }
  setMessageChange(data: string){
    this.messageChange.next(data);
  }
  getMessageChange(){
    return this.messageChange.asObservable();
  }
}
