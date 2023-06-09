import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';
import { Usuario } from 'src/app/types/usuario.interface';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  usuario: Usuario = {
    id: '',
    nombre: '',
    apellidos: '',
    email: '',
  }

  constructor(
    private perfilService: PerfilService,
    private router: Router,
  ) { }

  registrar(usuario: Usuario) {
    console.log({ usuario })
    this.perfilService.createUsuario(usuario)
      .subscribe(() => {
        this.router.navigateByUrl('/')
      })
  }

}
