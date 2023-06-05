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
    HostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
