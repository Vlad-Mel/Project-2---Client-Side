import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ILogin, IUser, IUserRegistration } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiEndPoint;

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(login: ILogin): Observable<any> {
    return this.http.post<IUser>(`${this.url}/user/login`, login, { withCredentials: true, observe: "response" })
  }

  createUser(registration: IUserRegistration) {
    return this.http.post<IUserRegistration>(`${this.url}/user/register`, registration);
  }

  logout() {
    return this.http.get(`${this.url}/user/logout`, {withCredentials: true})
                    .subscribe(res => {
                      console.log(res)
                      localStorage.clear();
                      this.authService.setToken = '';
                    });
  }
}
