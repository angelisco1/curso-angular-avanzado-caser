import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewOfertaComponent } from './pages/new-oferta/new-oferta.component';
import { OfertaInfoComponent } from './pages/oferta-info/oferta-info.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nueva-oferta', component: NewOfertaComponent },
  { path: 'ofertas/:ofertaId', component: OfertaInfoComponent },
  { path: 'registro', component: NuevoUsuarioComponent },
  { path: 'mi-perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
