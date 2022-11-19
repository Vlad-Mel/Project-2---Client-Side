import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
