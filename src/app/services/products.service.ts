import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  mockProducts: IProduct[]=[{
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

  fetchProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:8080/product/all")
  }

  fetchProduct(productID: number): Observable<Product>{
    console.log(productID);
    return this.httpClient.get<Product>("http://localhost:8080/product/id/" + productID)
    
  }

}
