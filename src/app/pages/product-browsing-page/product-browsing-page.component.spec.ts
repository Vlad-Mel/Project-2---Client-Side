import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrowsingPageComponent } from './product-browsing-page.component';

describe('ProductBrowsingPageComponent', () => {
  let component: ProductBrowsingPageComponent;
  let fixture: ComponentFixture<ProductBrowsingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBrowsingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBrowsingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
