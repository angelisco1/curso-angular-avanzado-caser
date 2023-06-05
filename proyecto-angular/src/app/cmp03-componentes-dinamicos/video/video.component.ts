import { Component, Input } from '@angular/core';
import { MediaType } from '../media.type';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() video: MediaType | null = null
}
