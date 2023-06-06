import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp01TransclusionComponent } from './cmp01-transclusion/cmp01-transclusion.component';
import { ProductosComponent } from './productos/productos.component';
import { SharedModule } from './shared/shared.module';
import { Cmp02ViewchildComponent } from './cmp02-viewchild/cmp02-viewchild.component';
import { ModalComponent } from './cmp02-viewchild/modal/modal.component';
import { Cmp03ComponentesDinamicosComponent } from './cmp03-componentes-dinamicos/cmp03-componentes-dinamicos.component';
import { AudioComponent } from './cmp03-componentes-dinamicos/audio/audio.component';
import { VideoComponent } from './cmp03-componentes-dinamicos/video/video.component';
import { HostDirective } from './cmp03-componentes-dinamicos/host.directive';
import { MiRouterModule } from './cmp03-componentes-dinamicos/mi-router/mi-router.module';
import { CarritoComponent } from './cmp03-componentes-dinamicos/carrito/carrito.component';
import { InicioComponent } from './cmp03-componentes-dinamicos/inicio/inicio.component';
import { MiAppRoutingModule } from './cmp03-componentes-dinamicos/mi-app.routes';



@NgModule({
  declarations: [
    AppComponent,
    Cmp01TransclusionComponent,
    ProductosComponent,
    Cmp02ViewchildComponent,
    ModalComponent,
    Cmp03ComponentesDinamicosComponent,
    AudioComponent,
    VideoComponent,
    HostDirective,
    CarritoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    SharedModule,
    MiAppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
