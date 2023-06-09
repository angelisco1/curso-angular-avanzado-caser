import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/types/usuario.interface';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  @Input() usuario: Usuario | null = null
  @Output() guardarUsuario = new EventEmitter<Usuario>()
  formUsuario: FormGroup | null = null

  ngOnInit() {
    this.formUsuario = this.initializeForm()
  }

  guardar() {
    this.guardarUsuario.emit(this.formUsuario!.value)
  }

  private initializeForm() {
    return new FormGroup({
      id: new FormControl(this.usuario!.id),
      nombre: new FormControl(this.usuario!.nombre, [Validators.required]),
      apellidos: new FormControl(this.usuario!.apellidos, [Validators.required]),
      email: new FormControl(this.usuario!.email, [Validators.required]),
    })
  }

}
