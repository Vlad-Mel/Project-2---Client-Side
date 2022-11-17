import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  mockProducts: IProduct[]=[
    {
      id:1,
      name:"Product 1",
      description: "this is the first product",
      price: 100,
      category: "contraption",
      image_url: "assets/img/contraption1.jpg"
    },
    {
      id:2,
      name:"Product 2",
      description: "this is the second product",
      price: 200,
      category: "contraption",
      image_url: "assets/img/contraption1.jpg"
    }
  ]

  constructor(private httpClient: HttpClient) {

  }
  
  products?: IProduct[];

  fetchCart(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:8080/cart/find/{user_id}")
  }

}
