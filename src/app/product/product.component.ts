import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})


export class ProductComponent implements OnInit {

  testProduct! : Product
  id! : number


  constructor(public ProductsService : ProductsService, private route : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params => this.id = params['id']));
    this.ProductsService.fetchProduct(this.id).subscribe(product => {this.testProduct = product;
    console.log(product)});

  }

}
