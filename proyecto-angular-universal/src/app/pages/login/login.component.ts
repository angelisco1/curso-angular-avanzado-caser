import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
  ) {
    this.formLogin = new FormGroup({
      username: new FormControl('cfalco', Validators.required),
      password: new FormControl('1234', Validators.required),
    })
  }

  login() {
    const loginData = this.formLogin.value
    this.authService.login(loginData)
      .subscribe({
        next: (data: { jwt: string }) => {
          this.storageService.setToken(data.jwt)
          this.router.navigateByUrl('/')
        },
        error: (err: { error: { msg: string } }) => {
          alert(`ERROR: ${err.error.msg}`)
        }
      })
  }

}
