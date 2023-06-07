import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Digimon, Digimons } from '../types/digimon.type';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {

  url: string = 'https://digimon-api.vercel.app/api/digimon'

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  getDigimons(): Observable<Digimons> {
    // return this.http.get<Digimons>(this.url)

    return forkJoin([this.http.get<Digimons>(this.url), this.getFavDigimons()])
      .pipe(
        map((arrayData: [Digimons, Digimons]) => {
          console.log({ arrayData })
          const [allDigimons, favDigimons] = arrayData

          const favDigimonsNames = favDigimons.map(d => d.name)
          // [motimon]

          allDigimons.forEach(digimon => {
            digimon.fav = favDigimonsNames.includes(digimon.name)
          })

          return allDigimons
        })
      )

  }

  getDigimonByName(name: string): Observable<Digimon> {
    return this.http.get<Digimons>(`${this.url}/name/${name}`)
      .pipe(
        map((data: Digimons) => {
          return data[0]
        })
      )
  }

  getFavDigimons(): Observable<Digimons> {
    const jwt = this.storageService.getToken()
    return this.http.get<Digimons>('/api/fav-digimons', {
      headers: {
        Authorization: jwt || ''
      }
    })
  }

  addFavDigimon(digimon: Digimon): Observable<any> {
    const jwt = this.storageService.getToken()
    return this.http.post<any>('/api/fav-digimons', digimon, {
      headers: {
        Authorization: jwt || ''
      }
    })
  }
}
