import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  private url_UFS:string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  private url_municio:string = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;

  constructor(
    private http: HttpClient
  ) { }

  public getEstados(): Observable<Array<any>>{

    return this.http.get<any>(this.url_UFS).pipe(
      res=>res,
      error=>error
    )
  } 

  public getMunicipios(idEstado:number): Observable<Array<any>>{

    return this.http.get<Array<any>>(`${this.url_municio}/${idEstado}/municipios`).pipe(
      res=>res,
      error=>error
    )
  }

  public getCEP(estado:string,municipio:string,logradouro:string): Observable<Array<any>>{
    
    let url:string = `https://viacep.com.br/ws/${estado}/${municipio}/${logradouro}/json/`;

    return this.http.get<Array<any>>(url).pipe(
      res=>res,
      error=>error
    )
  }
}
