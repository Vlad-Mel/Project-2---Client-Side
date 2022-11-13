import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { selectAuth } from '../states/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isAuthenticated$ = this.store.select(selectAuth);

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    this.isAuthenticated$.subscribe( (isAuth: boolean) => {
      if (!isAuth) this.router.navigate(['/'])
    } )

    return this.isAuthenticated$;
  }
  
}
