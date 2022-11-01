import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin, IUser } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8000/api"

  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<IUser> {
    return this.http.post<IUser>(this.url + "/login", login)
  }
}
