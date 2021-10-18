import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  confirmLogin = { 
    email: '', 
    password: '',
  }

  toggle = {
    errorMessage: false,
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home/'])
  }

  login() {
    if (this.confirmLogin.email.length > 0 && this.confirmLogin.password.length > 0) {
      this.router.navigate(['/events/']);
    } else {
      this.toggle.errorMessage = true;
    }
  }

  closeErrorMessage() {
    this.toggle.errorMessage = false;
  }
}
