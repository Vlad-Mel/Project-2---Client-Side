import { Component } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { IProduct } from 'src/app/models/product';

@Component({
    selector: "app-home-page",
    templateUrl: "./home-page.component.html"
})
class HomePageComponent {

    constructor(sales: SalesService){}

   products?: IProduct[]; 

}

export { HomePageComponent };