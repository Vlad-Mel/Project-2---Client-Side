import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) {

  }
  
  products?: IProduct[];

  fetchProducts(query: String): Observable<IProduct[]> {
    let search = {input:query};
    return this.httpClient.post<IProduct[]>("http://localhost:8080/product/search", search)
  }

}
