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
    ]),
    retypedPassword: new FormControl<string>('', [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  submit() {
    this.userService.createUser({
      firstName: this.form.value.firstName as string,
      lastName: this.form.value.lastName as string,
      email: this.form.value.lastName as string,
      password: this.form.value.password as string
    }).subscribe(response => {
      console.log(response);
    })
  }

}
