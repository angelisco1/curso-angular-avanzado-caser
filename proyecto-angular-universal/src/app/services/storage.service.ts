import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('authToken')
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token)
  }

  removeToken(): void {
    localStorage.removeItem('authToken')
  }
}
