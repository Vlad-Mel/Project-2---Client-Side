import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { IError } from 'src/app/models/error';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  isLoading = false;
  hasError = false;
  error = '';

  constructor(private userService: UserService, private authService: AuthService, private modalService: ModalService){}

  form = new FormGroup({
    username: new FormControl<string>('', [
      Validators.required
    ]),
    password: new FormControl<string>('', [
      Validators.required
    ])
  })

  submit() {
    this.isLoading = true;

    this.userService.login({
      username: this.form.value.username as string,
      password: this.form.value.password as string
    }).subscribe( {

      next: response => {
        this.hasError = false;
        
        console.log(response)
        
        setTimeout(() => {
          this.modalService.close()
          this.isLoading = false;
        }, 1000);
        
        this.authService.setToken = document.cookie;
      },
      error: errorResponse => {

        setTimeout(() => {
          this.hasError = true
          this.error = errorResponse.error.message;
          this.isLoading = false;
        }, 1000);
          
      },

      complete: () => { this.isLoading = false;}
    })
  }
  

  get username() {
    return this.form.controls.username as FormControl
  }
  
}
