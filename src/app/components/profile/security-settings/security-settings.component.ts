import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html'
})
export class SecuritySettingsComponent {

  hasError: any = {
    oldPassword: false,
    newPassword: false,
    reenteredPassword: false
  }
  isUpdated!:boolean;

  isLoading = false;

  message!: string;

  constructor(private userService: UserService){};

  form = new FormGroup({
    oldPassword: new FormControl<string>(''),
    newPassword: new FormControl<string>(''),
    reenteredPassword:new FormControl<string>('')
  })

  submit() {
    this.isUpdated = false;

    if (this.form.value.newPassword !== this.form.value.reenteredPassword) {
      this.hasError = {...this.hasError, newPassword: true, reenteredPassword: true}
      this.message = "The passwords do not match. Try again."
      return;
    }
    
    Object.keys(this.hasError).forEach( key => { this.hasError[key] = false;})
    this.message = '';

    this.userService.changePassword({
      oldPassword: this.form.value.oldPassword as string,
      newPassword: this.form.value.newPassword as string
    }).subscribe({
      next: response => {
        this.isUpdated = true;
        this.message = response.message;
      },
      error: error => {
        this.hasError = {...this.hasError, oldPassword: true};
        this.message = error.error;
      }
    })

  }

}
