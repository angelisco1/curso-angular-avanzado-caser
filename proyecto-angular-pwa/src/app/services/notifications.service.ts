import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  apiUrl = 'http://localhost:8080/suscripciones'

  constructor(
    private http: HttpClient
  ) { }

  saveSuscripcion(suscripcion: PushSubscription): Observable<any> {
    return this.http.post(this.apiUrl, suscripcion)
  }
}
