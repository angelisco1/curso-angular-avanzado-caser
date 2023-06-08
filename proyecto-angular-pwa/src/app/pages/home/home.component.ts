import { Component } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Ofertas } from 'src/app/types/oferta.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ofertas: Ofertas = []

  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertas()
      .subscribe((ofertas: Ofertas) => {
        this.ofertas = ofertas
      })
  }

}
