import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-navigation',
  templateUrl: './profile-navigation.component.html'
})
export class ProfileNavigationComponent {

  @Input() name!:string;

  constructor() { }

}
