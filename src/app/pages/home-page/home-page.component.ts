import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { IProduct } from 'src/app/models/product';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: "app-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"]
})
class HomePageComponent implements OnInit {

    constructor(private sales: SalesService){}

    products?: IProduct[]; 
    source = interval(500);
    subscription = this.source.subscribe(val => this.strobe())
    strobeOn: boolean = false;

    ngOnInit(){
        this.strobe();
        this.sales.fetchProducts().subscribe( products => {
            this.products=products;
        });
    }

    strobe(){
        this.strobeOn=!this.strobeOn;
    }

}

export { HomePageComponent };