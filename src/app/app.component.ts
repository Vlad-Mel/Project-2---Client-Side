import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';
import { AppState } from './states/app.state';
import { authLogin, authLogout } from './states/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
      (AuthService.isAuthenticated()) ? this.store.dispatch(authLogin()) : this.store.dispatch(authLogout());
      console.log("Auth Service - App Component: AuthService " + AuthService.isAuthenticated())
  }

  title = 'client';

  constructor(private store: Store<AppState>) {}
}
