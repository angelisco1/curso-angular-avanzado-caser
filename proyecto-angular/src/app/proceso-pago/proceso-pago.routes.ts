import { RouterModule, Routes } from "@angular/router";
import { Paso1Component } from "./paso1/paso1.component";
import { Paso2Component } from "./paso2/paso2.component";
import { ModuleWithProviders } from "@angular/core";


const PROCESO_PAGO_ROUTES: Routes = [
  { path: 'paso-1', component: Paso1Component },
  { path: 'paso-2', component: Paso2Component },
  { path: '', redirectTo: 'paso-1', pathMatch: 'full' },
]

export const ProcesoPagoRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(PROCESO_PAGO_ROUTES)