import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewOfertaComponent } from './pages/new-oferta/new-oferta.component';
import { OfertaInfoComponent } from './pages/oferta-info/oferta-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nueva-oferta', component: NewOfertaComponent },
  { path: 'oferta/:ofertaId', component: OfertaInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
