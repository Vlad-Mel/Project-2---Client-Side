import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService){}

  form = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  })

  submit() {
    this.userService.login({
      username: this.form.value.username as string,
      password: this.form.value.password as string
    }).subscribe( response => {

      console.log(response)
    })
    console.log(this.form.value)
  }

  get username() {
    return this.form.controls.username as FormControl
  }


  ngOnInit(): void {
  }

}
