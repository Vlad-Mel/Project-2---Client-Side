import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProfile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html'
})
export class ProfileFormComponent implements OnInit {

  hasError = false;
  isUpdated = false;
  message = '';

  form = new FormGroup({
    firstName: new FormControl<string>('', []),
    lastName: new FormControl<string>('', []),
    gender: new FormControl<string>(''),
    dob: new FormControl<string>(''),
    email: new FormControl<string>('', []),
    phoneNumber: new FormControl<string>('', [])
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.profile().subscribe({ 
      next: profile => {
        this.form.setValue({
          firstName: profile.user.firstName ? profile.user.firstName : '' ,
          lastName: profile.user.lastName ? profile.user.lastName : '',
          gender: profile.gender ? profile.gender : '',
          dob: profile.dob ? profile.dob : '',
          email: profile.user.email ? profile.user.email : '',
          phoneNumber: profile.phoneNumber ? profile.phoneNumber : ''
        })
      },
      error: () => {
        /* If the profile does not exist, we takes data directly from JWT */
        const user = AuthService.getUser();
        this.form.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          gender: '',
          dob: '',
          phoneNumber: ''
        })
      }
    })
  }

  submit() {
    this.isUpdated = false;
    this.hasError = false;
    this.message = '';

    this.userService.updateProfile({
      firstName: this.form.value.firstName as string,
      lastName: this.form.value.lastName as string,
      email: this.form.value.email as string,
      gender: this.form.value.gender as string,
      dob: this.form.value.dob as string,
      phoneNumber: this.form.value.phoneNumber as string,
    }).subscribe({
      next: profile => {
        this.isUpdated = true;
        this.message = "The profile is successfully updated!";
      },
      error: error => {
        this.hasError = false;
        this.message = "Something went wrong. Cannot update the profile."
      }
    })
  }
}
