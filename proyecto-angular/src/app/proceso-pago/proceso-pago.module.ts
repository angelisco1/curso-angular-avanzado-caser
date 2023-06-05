import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paso1Component } from './paso1/paso1.component';
import { Paso2Component } from './paso2/paso2.component';
import { NumeroTarjetaPipe } from './numero-tarjeta.pipe';
import { ProcesoPagoRouting } from './proceso-pago.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Paso1Component,
    Paso2Component,
    NumeroTarjetaPipe
  ],
  imports: [
    CommonModule,
    ProcesoPagoRouting,
    SharedModule,
  ]
})
export class ProcesoPagoModule { }
