import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() name = "";
  @Input() price!: number;
  @Input() image_url = "";
  @Input() quantity!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
