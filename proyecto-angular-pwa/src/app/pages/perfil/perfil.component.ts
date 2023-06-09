import { Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { Usuario } from 'src/app/types/usuario.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: Usuario | null = null

  constructor(
    private perfilService: PerfilService,
  ) { }

  ngOnInit() {
    this.perfilService.getPerfil()
      .subscribe((usuario: Usuario) => {
        this.usuario = usuario
      })
  }

  actualizar(usuario: Usuario) {
    this.perfilService.updatePerfil(usuario)
      .subscribe((usuario: Usuario) => {
        this.usuario = usuario
      })
  }

}
