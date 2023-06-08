import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/types/oferta.interface';

@Component({
  selector: 'app-new-oferta',
  templateUrl: './new-oferta.component.html',
  styleUrls: ['./new-oferta.component.css']
})
export class NewOfertaComponent {

  oferta: Oferta = {
    titulo: '',
    descripcion: '',
    salario: 0,
    ciudad: '',
    empresa: '',
    id: '',
  }

  constructor(
    private ofertasService: OfertasService,
    private router: Router
  ) {

  }

  crearOferta(oferta: Oferta) {
    this.ofertasService.createOferta(oferta)
      .subscribe(() => {
        this.router.navigateByUrl('/')
      })
  }

}
