import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  estaAbierto: boolean = false


  abrirModal() {
    this.estaAbierto = true
  }

  cerrarModal() {
    this.estaAbierto = false
  }

}
