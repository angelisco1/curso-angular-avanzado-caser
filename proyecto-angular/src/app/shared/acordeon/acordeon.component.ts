import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent {
  @Input() titulo: string = ''
  estaCerrado: boolean = true

  toggleCerrar() {
    this.estaCerrado = !this.estaCerrado
  }

}
