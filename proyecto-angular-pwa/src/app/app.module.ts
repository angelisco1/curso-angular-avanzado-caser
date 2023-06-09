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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import localeEn from '@angular/common/locales/en'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'




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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http)
        },
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),

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
export class AppModule {
  constructor() {
    registerLocaleData(localeEn, 'en')
    registerLocaleData(localeEs, 'es')
  }
}
