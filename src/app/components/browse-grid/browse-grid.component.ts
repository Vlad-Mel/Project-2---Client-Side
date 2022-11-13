import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';
import { Input } from '@angular/core';

@Component({
  selector: 'app-browse-grid',
  templateUrl: './browse-grid.component.html',
  styleUrls: ['./browse-grid.component.css']
})
export class BrowseGridComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products?: IProduct[];

  @Input() visibleCategories: string[] = [];

  ngOnInit(): void {
    this.productsService.fetchProducts().subscribe( products => {
      this.products=products;
    });
  }

  showProduct(product: IProduct): boolean{
    if (this.visibleCategories.length==0)
      return true ;
    if (this.visibleCategories.includes(product.category))
      return true;
    else return false;
  }

}
