import { Component, Input } from '@angular/core';
import { MediaType } from '../media.type';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  @Input() item: MediaType | null = null
}
