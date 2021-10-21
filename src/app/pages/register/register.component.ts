import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register = { 
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
    confirmRegister: false,
  }

  constructor(private router: Router, private userService: UserService) {  }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home/'])
  }

  newRegister() {
    if (
      this.register.firstName.length > 0 &&
      this.register.lastName.length > 0 &&
      this.register.birth.length > 0 &&
      this.register.genre.length > 0 &&
      this.register.email.length > 0 &&
      this.register.password.length > 0 &&
      this.register.confirmationPassword.length > 0      
      ) {
        this.toggle.confirmRegister = true;
        this.userService.register = this.register;
      } else {
        this.toggle.errorMessage = true;
      }
  }

  closeErrorMessage() {
    this.toggle.errorMessage = false;
    this.toggle.confirmRegister = false;
  }

  closeRegister() {
    this.router.navigate(['/home/']);
  }
}
