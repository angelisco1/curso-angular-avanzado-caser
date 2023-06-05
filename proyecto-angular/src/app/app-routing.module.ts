import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'proceso-pago', loadChildren: () => import('./proceso-pago/proceso-pago.module').then(m => m.ProcesoPagoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }