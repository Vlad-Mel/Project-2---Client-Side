import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  street?: String;
  city?: String;
  state?: String;
  zip?: Number;
  card?: Number;
  cvv?: Number;
  date?: String;

  total?: number;

  submitted: boolean = false;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getTotal(AuthService.getUser().id).subscribe( total => this.total = total)
  }

  submitOrder(): void {
    this.submitted=true;
    this.cart.clearCart(AuthService.getUser().id).subscribe();
  }

}
