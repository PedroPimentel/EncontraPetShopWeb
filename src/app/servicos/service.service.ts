import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entrada } from '../entidades/entrada';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private servidor = "https://localhost:44387/api/petshop/";

  constructor(public http: HttpClient) { }

  public encontrarMelhorOpcao(entrada: Entrada): Observable<any>{

    const json = JSON.stringify(entrada)
    let entidade = JSON.parse(json);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let url = this.servidor + "encontrarmelhoropcao";
    return this.http.post(url, entidade, httpOptions);
  }
}
