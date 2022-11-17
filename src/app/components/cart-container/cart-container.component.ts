import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products?: IProduct[];

  @Input() userItems: string[] = [];

  ngOnInit(): void {
    this.cartService.fetchCart().subscribe( products => {
      this.products=products;
    })
  }

  showCart(product: IProduct): void{
    
  }

}
