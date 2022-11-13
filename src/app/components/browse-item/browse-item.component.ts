import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { Input } from '@angular/core';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.css']
})
export class BrowseItemComponent implements OnInit {
  
  @Input() name = ""; 
  @Input() image_url = ""; 

  highlight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
