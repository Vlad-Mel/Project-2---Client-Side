import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {

  @Input() product: IProduct= {
    id: 0,
    name: "",
    category: "",
    description: "",
    price: 0,
    normal_price: 0,
    image_url: ""
  };

  @Input() strobe: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
