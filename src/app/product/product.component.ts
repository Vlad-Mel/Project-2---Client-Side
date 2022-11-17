import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IProduct } from '../models/product';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})


export class ProductComponent implements OnInit {

  testProduct! : IProduct
  id! : number
  value: number = 1;


  constructor(public ProductsService : ProductsService, private route : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params => this.id = params['id']));
    this.ProductsService.fetchProduct(this.id).subscribe(product => {this.testProduct = product;
    console.log(product)});

  }

  addToCart() : void{
    //this.ProductsService.addToCart(AuthService.getUser().id, this.testProduct.id, this.value)
    this.ProductsService.addToCart(AuthService.getUser().id, this.id, this.value).subscribe(response => {console.log(response)});
  }

  consoleLog(text : string){
    console.log(text);
  }

}
