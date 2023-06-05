import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp02-viewchild',
  templateUrl: './cmp02-viewchild.component.html',
  styleUrls: ['./cmp02-viewchild.component.css']
})
export class Cmp02ViewchildComponent {
  @ViewChild('modal1') modal: ModalComponent | null = null
  // @ViewChild('modal2') modal: ModalComponent | null = null

  ngOnInit() {
    // if (this.modal) {
    //   this.modal.abrirModal()
    // } else {
    //   alert('ES NULL')
    // }
  }

  ngAfterViewInit() {
    this.mostrarModal()
  }

  mostrarModal() {
    if (this.modal) {
      this.modal.abrirModal()
    }
  }

}
