import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DigimonsService } from 'src/app/services/digimons.service';
import { Digimons } from 'src/app/types/digimon.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  digimons: Digimons = []

  constructor(
    private digimonsService: DigimonsService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.digimonsService.getDigimons()
        .subscribe((data: Digimons) => {
          this.digimons = data
        })
      // this.digimonsService.getFavDigimons()
      //   .subscribe((data: Digimons) => {
      //     console.log({ data })
      //   })
    }
  }

}
