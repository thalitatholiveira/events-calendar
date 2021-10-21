import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  newLogin = { 
    email: '', 
    password: '',
  }

  toggle = {
    errorMessage: false,
    noRegister: false,
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home/'])
  }

  login() {
    if (this.newLogin.email.length > 0 && this.newLogin.password.length > 0) {
      if (
        this.newLogin.email == this.userService.register.email &&
        this.newLogin.password == this.userService.register.password) {
          this.router.navigate(['/events/'])
      } else {
        this.toggle.noRegister = true;
      }
    } else {
      this.toggle.errorMessage = true;
    }
  }

  registerNow() {
    this.router.navigate(['/register/'])
  }

  closeErrorMessage() {
    this.toggle.errorMessage = false;
    this.toggle.noRegister = false;
  }
}
