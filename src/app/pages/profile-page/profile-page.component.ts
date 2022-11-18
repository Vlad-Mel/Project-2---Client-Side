import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

  user = AuthService.getUser()

  constructor(public router: Router, private userService: UserService) { }

  ngOnInit(): void { }

}
