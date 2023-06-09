import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './pages/home/home.component';
import { OfertaInfoComponent } from './pages/oferta-info/oferta-info.component';
import { NewOfertaComponent } from './pages/new-oferta/new-oferta.component';
import { HeaderComponent } from './components/header/header.component';
import { FormOfertaComponent } from './components/form-oferta/form-oferta.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfertaInfoComponent,
    NewOfertaComponent,
    HeaderComponent,
    FormOfertaComponent,
    PerfilComponent,
    NuevoUsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
