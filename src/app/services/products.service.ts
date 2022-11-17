import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {

  }
  
  products?: IProduct[];

  fetchProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:8080/product/all")
  }

  fetchProduct(productID: number): Observable<IProduct>{
    console.log(productID);
    return this.httpClient.get<IProduct>("http://localhost:8080/product/id/" + productID)
    
  }

  addToCart(userID : number, productID: number, quantity: number){
      console.log("added " + quantity + " of product " + productID + " to user #" + userID + "'s cart")
      if(quantity == 1){
        return this.httpClient.post(`http://localhost:8080/cart/add/${userID}/${productID}`, "")
      }
      else{
        return this.httpClient.post(`http://localhost:8080/cart/add/${userID}/${productID}/${quantity}`, "")
      }
      
  }

}
