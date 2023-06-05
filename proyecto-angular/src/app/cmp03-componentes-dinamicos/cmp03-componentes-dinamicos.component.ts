import { Component, ComponentRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MediaType } from './media.type';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';
import { HostDirective } from './host.directive';

@Component({
  selector: 'app-cmp03-componentes-dinamicos',
  templateUrl: './cmp03-componentes-dinamicos.component.html',
  styleUrls: ['./cmp03-componentes-dinamicos.component.css']
})
export class Cmp03ComponentesDinamicosComponent {
  @ViewChild(HostDirective) host: HostDirective | null = null

  listaMediaItems: Array<MediaType & { tipo: 'audio' | 'video' }> = [
    { titulo: 'Canción 1', src: 'assets/audio1.mp3', tipo: 'audio' },
    { titulo: 'Video 1', src: 'assets/video1.mp4', tipo: 'video' },
    { titulo: 'Canción 2', src: 'assets/audio2.mp3', tipo: 'audio' },
    { titulo: 'Canción 3', src: 'assets/audio3.mp3', tipo: 'audio' },
    { titulo: 'Video 2', src: 'assets/video2.mp4', tipo: 'video' },
    { titulo: 'Video 3', src: 'assets/video3.mp4', tipo: 'video' },
  ]

  mostrarMedia(item: MediaType & { tipo: 'audio' | 'video' }) {
    const vcr: ViewContainerRef = this.host!.viewContainerRef

    const tipoComponent = item.tipo === 'audio' ? AudioComponent : VideoComponent
    const component: ComponentRef<AudioComponent | VideoComponent> = vcr.createComponent(tipoComponent)

    // const src = item.src
    // const titulo = item.titulo
    const { src, titulo } = item
    component.instance.video = { src, titulo }

  }

}
