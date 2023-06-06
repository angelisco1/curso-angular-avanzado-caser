import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {
  urlChanged$ = new BehaviorSubject<string>('/hola')

  constructor() { }

  navigateByUrl(url: string) {
    window.history.pushState({}, '', url)
    this.urlChanged$.next(url)
  }
}