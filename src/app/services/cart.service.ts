import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) {

  }
  
  products?: IProduct[];

  fetchCart(user_id: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:8080/cart/find/" + user_id)
  }

  getTotal(user_id: number): Observable<number> {
    return this.httpClient.get<number>("http://localhost:8080/cart/total/" + user_id)
  }

  clearCart(user_id: number): Observable<number> {
    return this.httpClient.delete<number>("http://localhost:8080/cart/clear/" + user_id)
  }

}
