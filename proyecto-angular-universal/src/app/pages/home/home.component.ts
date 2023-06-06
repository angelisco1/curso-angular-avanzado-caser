import { Component } from '@angular/core';
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
  ) { }

  ngOnInit() {
    this.digimonsService.getDigimons()
      .subscribe((data: Digimons) => {
        this.digimons = data
      })
  }

}
