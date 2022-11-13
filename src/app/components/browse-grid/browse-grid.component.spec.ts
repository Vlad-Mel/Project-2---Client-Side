import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGridComponent } from './browse-grid.component';

describe('BrowseGridComponent', () => {
  let component: BrowseGridComponent;
  let fixture: ComponentFixture<BrowseGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
