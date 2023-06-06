import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { DigimonsService } from 'src/app/services/digimons.service';
import { Digimon } from 'src/app/types/digimon.type';

@Component({
  selector: 'app-digimon-info',
  templateUrl: './digimon-info.component.html',
  styleUrls: ['./digimon-info.component.css']
})
export class DigimonInfoComponent {
  digimon: Digimon | null = null

  constructor(
    private digimonsService: DigimonsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const digimonName = params.get('name')
          return this.digimonsService.getDigimonByName(digimonName!)
        })
      )
      .subscribe((data: Digimon) => {
        this.digimon = data
      })




    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const digimonName = params.get('name')

    //   this.digimonsService.getDigimonByName(digimonName)
    //   // .subscribe()
    // })
  }

}
