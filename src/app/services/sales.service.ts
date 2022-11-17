import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient: HttpClient) {}
  
  products?: IProduct[];

  fetchProducts(query: String): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>("http://localhost:8080/product/sales");
  }

}