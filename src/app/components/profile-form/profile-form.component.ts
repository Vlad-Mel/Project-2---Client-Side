import { Component, OnInit } from '@angular/core';
import { ProfileSupplementService } from 'src/app/services/profile-supplement.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {



  constructor(public profileSupplement: ProfileSupplementService) {
  }

  ngOnInit(): void {
  }

}
