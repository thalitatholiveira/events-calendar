import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  confirmRegister = { 
    firstName: '', 
    lastName: '',
    birth: '',
    genre: '',
    email: '',
    password: '',
    confirmationPassword: '',
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

  register() {
    if (
      this.confirmRegister.firstName.length > 0 &&
      this.confirmRegister.lastName.length > 0 &&
      this.confirmRegister.birth.length > 0 &&
      this.confirmRegister.genre.length > 0 &&
      this.confirmRegister.email.length > 0 &&
      this.confirmRegister.password.length > 0 &&
      this.confirmRegister.confirmationPassword.length > 0      
      ) {
        this.router.navigate(['/events/']);
      } else {
        this.toggle.errorMessage = true;
      }
  }

  closeErrorMessage() {
    this.toggle.errorMessage = false;
  }
}
