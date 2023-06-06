import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DigimonInfoComponent } from './pages/digimon-info/digimon-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'digimon/:name', component: DigimonInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
