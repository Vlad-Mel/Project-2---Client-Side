import { Component, OnInit } from '@angular/core';
import { ISocialMedias } from 'src/app/models/profile';

@Component({
  selector: 'app-profile-aside',
  templateUrl: './profile-aside.component.html'
})
export class ProfileAsideComponent implements OnInit {

  status = "Online"

  socialMedias: ISocialMedias = {
    facebook: '',
    linkedIn: '',
    twitter: '',
    instagram:  '',
    gmail: '',
    gitHub: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
