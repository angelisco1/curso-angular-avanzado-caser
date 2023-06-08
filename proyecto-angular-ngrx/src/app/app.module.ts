import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppReducers } from './app.state';
import { ContadorComponent } from './components/contador/contador.component';
import { MaquinaExpendedoraComponent } from './components/maquina-expendedora/maquina-expendedora.component';
import { MaquinaExpEffect } from './effects/maquina-exp.effect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    MaquinaExpendedoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(AppReducers, {}),
    EffectsModule.forRoot([MaquinaExpEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
