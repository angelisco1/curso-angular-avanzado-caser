import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroTarjeta'
})
export class NumeroTarjetaPipe implements PipeTransform {

  transform(value: number): string {
    return '**** **** **** 0987';
  }

}
