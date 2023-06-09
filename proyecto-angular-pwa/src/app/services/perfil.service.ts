import { Injectable } from '@angular/core';
import { Usuario } from '../types/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  apiUrl: string = 'http://localhost:8080/perfil'

  constructor(
    private http: HttpClient,
  ) { }

  getPerfil(): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl)
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario)
  }

  updatePerfil(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.apiUrl, usuario)
  }
}
