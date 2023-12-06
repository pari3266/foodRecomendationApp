import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRestaurantsComponent } from './list-of-restaurants.component';

describe('ListOfRestaurantsComponent', () => {
  let component: ListOfRestaurantsComponent;
  let fixture: ComponentFixture<ListOfRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
