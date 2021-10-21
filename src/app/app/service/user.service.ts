import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  register = { 
    firstName: '', 
    lastName: '',
    birth: '',
    genre: '',
    email: '',
    password: '',
    confirmationPassword: '',
  }
}
