import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  @Input() user!: any;

  form = new FormGroup({
    firstName: new FormControl<string>('', []),
    lastName: new FormControl<string>('', []),
    gender: new FormControl<string>(''),
    dob: new FormControl<Date>(new Date()),
    email: new FormControl<string>('', []),
    phoneNumber: new FormControl<string>('', [])
  });

  constructor() {}

  ngOnInit(): void {
    this.form.setValue({
      firstName: this.user.firstName ? this.user.firstName : '' ,
      lastName: this.user.lastName ? this.user.lastName : '',
      gender: this.user.gender ? this.user.gender : '',
      dob: this.user.dob ? this.user.dob : '',
      email: this.user.email ? this.user.email : '',
      phoneNumber: ''
    })
  }

  submit() {
    console.log(this.form)
  }
}
