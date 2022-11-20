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

  products?: Map<IProduct, number>;
  userId?: number;
  total?: String;

  @Input() userItems: string[] = [];

  ngOnInit(): void {
    this.userId = AuthService.getUser().id;
    this.cartService.fetchCart(AuthService.getUser().id).subscribe( products => {
      /*const mapper = new Map();
      products.forEach( product => {
        if(!mapper.has(product)) {
          mapper.set(product, 1);
        }else {
          mapper.set(product, mapper.get(product) + 1);
        }
      });
      const uniqueProducts=[];
      const amount = [];
      for(let i of mapper) {
        uniqueProducts.push(i[0]);
        amount.push(i[1]);
      }*/
      let dictionary: any = {};
      let map = new Map();

      products.forEach( product => {
        if(!dictionary.hasOwnProperty(product.name)) {
          dictionary = { ...dictionary, [`${product.name}`]: 1};
        }else {
          dictionary = { ...dictionary, [`${product.name}`]: dictionary[`${product.name}`] + 1};
        }
      })
      products.forEach( product => {
        if(product.name in dictionary) {
          map.set(product, dictionary[product.name]);
          delete dictionary[product.name];
        }
      });
      this.products=map;
    })
    this.cartService.getTotal(AuthService.getUser().id).subscribe( total => {
      this.total = (Math.round(total*100)/100).toFixed(2);
    })
  }

}
