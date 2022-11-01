import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }

  form = new FormGroup({
    firstName: new FormControl<string>('', [
      Validators.required
    ]),
    lastName: new FormControl<string>('', [
      Validators.required

    ]),
    email: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('' , [
      Validators.required,
      /* Regex requires at least 6 symbols, lowercase, uppercase, and a digit */
      Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/')
    ]) 

  })

  ngOnInit(): void {
  }

  submit() {
    
  }

}
