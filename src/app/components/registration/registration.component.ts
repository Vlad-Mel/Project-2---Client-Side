import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  isLoading = false;

  isFailedRegister = false;
  isSuccessRegister = false;
  serverErrorMessage!:string;

  formError: any = {
    "password" : false,
    "retypedPassword" : false
  };

  errorMessage!: String;

  constructor(private userService: UserService) { }

  form = new FormGroup({
    firstName: new FormControl<string>('', [ Validators.required ]),
    lastName: new FormControl<string>('', [ Validators.required ]),
    email: new FormControl<string>('', [ Validators.required ]),
    password: new FormControl<string>('' , [
      Validators.required,
      /* Regex requires at least 6 symbols, lowercase, uppercase, and a digit */
      Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/')
    ]),
    retypedPassword: new FormControl<string>('', [ Validators.required])
  })

  get formControls() {
    const controls = this.form.controls;
    return [controls.firstName, controls.lastName, controls.email, controls.password] as FormControl[];
  }

  submit(): void {
    this.isLoading = true;
    this.isSuccessRegister = false;
    this.isFailedRegister = false;

    if (this.form.value.password === this.form.value.retypedPassword) {
      Object.keys(this.formError).forEach( key => { this.formError[key] = false;})

      this.userService.createUser({
        firstName: this.form.value.firstName as string,
        lastName: this.form.value.lastName as string,
        email: this.form.value.email as string,
        password: this.form.value.password as string
      }).subscribe({
        
        next: response => {

          setTimeout( () => {
            this.isLoading = false;
            this.isSuccessRegister = true;
          }, 1000)

          console.log(response);
        },
        error: (error) => {

          setTimeout( () => {
            this.isLoading = false;
            this.isFailedRegister = true;
            this.errorMessage = error.error.message;
          }, 1000)

          console.log(error);
        },
        complete: () => {
          
        }
    })

    } else {
      this.isLoading = false;
      this.errorMessage = "The passwords do not match. Try again.";
      this.formError = {...this.formError, 'password' : true, 'retypedPassword': true};
    }
    
  }

}
