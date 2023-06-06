import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Digimon, Digimons } from '../types/digimon.type';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  url: string = 'https://digimon-api.vercel.app/api/digimon'

  constructor(
    private http: HttpClient,
  ) { }

  getDigimons(): Observable<Digimons> {
    return this.http.get<Digimons>(this.url)
  }

  getDigimonByName(name: string): Observable<Digimon> {
    return this.http.get<Digimons>(`${this.url}/name/${name}`)
      .pipe(
        map((data: Digimons) => {
          return data[0]
        })
      )
  }
}
