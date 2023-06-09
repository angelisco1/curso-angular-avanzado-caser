import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Oferta, Ofertas } from '../types/oferta.interface';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  apiUrl: string = 'http://localhost:8080/ofertas'

  constructor(
    private http: HttpClient
  ) { }

  getOfertas(): Observable<Ofertas> {
    return this.http.get<Ofertas>(this.apiUrl)
  }

  getOferta(ofertaId: string): Observable<Oferta> {
    return this.http.get<Oferta>(`${this.apiUrl}/${ofertaId}`)
  }

  createOferta(oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.apiUrl, oferta)
  }

}
