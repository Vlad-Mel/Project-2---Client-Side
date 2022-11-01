import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin, IUser } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(this.url + "/login", login)
  }

  createUser() {

  }
}
