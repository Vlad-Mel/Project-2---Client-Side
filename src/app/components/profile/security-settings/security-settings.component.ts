import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html'
})
export class SecuritySettingsComponent {

  hasError = false;
  isLoading = false;

  message!: string;

  form = new FormGroup({
    currentPassword: new FormControl<string>(''),
    newPassword: new FormControl<string>(''),
    reenteredPassword:new FormControl<string>('')
  })

  submit() {
    if (this.form.value.newPassword !== this.form.value.reenteredPassword) {
      this.hasError = true
      this.message = "The passwords do not match. Try again."
      return;
    }

    this.hasError = false;
    this.message = '';

  }

}
