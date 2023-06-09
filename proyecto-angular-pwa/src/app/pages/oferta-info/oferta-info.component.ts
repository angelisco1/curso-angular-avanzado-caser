import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Oferta } from 'src/app/types/oferta.interface';

@Component({
  selector: 'app-oferta-info',
  templateUrl: './oferta-info.component.html',
  styleUrls: ['./oferta-info.component.css']
})
export class OfertaInfoComponent {
  oferta: Oferta | null = null

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const ofertaId = params.get('ofertaId')
          return this.ofertasService.getOferta(ofertaId!)
        })
      )
      .subscribe((oferta: Oferta) => {
        this.oferta = oferta
      })
  }

}
