import { Component, OnChanges, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {

  constructor(private searchService: SearchService) { }

  products?: IProduct[];

  @Input() query: String = "";

  ngOnChanges(): void {
    this.searchService.fetchProducts(this.query).subscribe( products => {
      this.products=products;
    });
  }

}
