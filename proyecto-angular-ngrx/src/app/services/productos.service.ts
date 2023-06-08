import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductos() {
    return of([
      { nombre: 'Perrito piloto', precio: 12, codigo: 13, stock: 5 },
      { nombre: 'Peluche sonic', precio: 3, codigo: 20, stock: 5 },
      { nombre: 'Peluche marsupilami', precio: 6, codigo: 9, stock: 5 },
    ]).pipe(
      delay(1200)
    )
  }
}
