import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  logout() {
    this.storageService.removeToken()
    this.router.navigateByUrl('/login')
  }

}
