import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-browse-grid',
  templateUrl: './browse-grid.component.html',
  styleUrls: ['./browse-grid.component.css']
})
export class BrowseGridComponent implements OnInit {

  constructor(private productsService: ProductsService) { }


  products?: IProduct[];

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe( products => {
      this.products=products;
    });
  }

}
