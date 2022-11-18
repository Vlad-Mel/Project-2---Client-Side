import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html'
})
export class ProfileNavigationComponent {

  @Input() name!:string;

  constructor(public userService: UserService) { }

}
