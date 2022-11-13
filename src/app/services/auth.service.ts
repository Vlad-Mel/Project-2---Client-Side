import { Injectable, OnInit } from '@angular/core';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { authLogin, authLogout } from '../states/auth/auth.actions';
import { IUser } from '../models/user';

interface customJwtPayload extends JwtPayload {
  user: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static token = (document.cookie != '') ? document.cookie : '';

  constructor(private store: Store<AppState>) { }

  set setToken(token: string) {
    AuthService.token = token;
    localStorage.setItem('token', AuthService.token);

    (AuthService.isAuthenticated()) ? this.store.dispatch(authLogin()) : this.store.dispatch(authLogout());
  }

  static get getToken(): string {
    return this.token;
  }

  static getUser() {

    if (AuthService.token === '') return null;
  
    const decoded = jwtDecode<customJwtPayload>(AuthService.token);
    return decoded.user;
  }

  static isAuthenticated() {

    if (AuthService.token === '') return false;
  
    const decoded = jwtDecode<JwtPayload>(AuthService.token);
    const currentDate = new Date();
    const seconds = Date.parse('' + currentDate) / 1000;

    return (decoded.exp != undefined && decoded.exp > seconds);
  }
}

