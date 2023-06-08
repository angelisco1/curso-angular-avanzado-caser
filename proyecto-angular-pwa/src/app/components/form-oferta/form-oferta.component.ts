import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Oferta } from 'src/app/types/oferta.interface';


@Component({
  selector: 'app-form-oferta',
  templateUrl: './form-oferta.component.html',
  styleUrls: ['./form-oferta.component.css']
})
export class FormOfertaComponent {
  @Input() oferta: Oferta | null = null
  @Output() guardarOferta = new EventEmitter<Oferta>()
  formOferta: FormGroup | null = null


  ngOnInit() {
    this.formOferta = this.initializeForm()
  }


  guardar() {
    console.log('GUARDAR', this.formOferta)
    this.guardarOferta.emit(this.formOferta!.value)
  }

  private initializeForm(): FormGroup {
    return new FormGroup({
      titulo: new FormControl(this.oferta!.titulo, [Validators.required]),
      descripcion: new FormControl(this.oferta!.descripcion, [Validators.required]),
      salario: new FormControl(this.oferta!.salario, [Validators.required]),
      ciudad: new FormControl(this.oferta!.ciudad, [Validators.required]),
      empresa: new FormControl(this.oferta!.empresa, [Validators.required]),
      id: new FormControl(this.oferta!.id),
    })
  }
}
