import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products?: IProduct[];
  userId?: number;
  total?: number;

  @Input() userItems: string[] = [];

  ngOnInit(): void {
    this.userId = AuthService.getUser().id;
    this.cartService.fetchCart(AuthService.getUser().id).subscribe( products => {
      this.products=products;
    })
    this.cartService.getTotal(AuthService.getUser().id).subscribe( total => {
      this.total = Math.round(total*100)/100;
    })
  }

}
