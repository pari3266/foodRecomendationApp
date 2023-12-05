import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurantsListComponent } from './new-restaurants-list.component';

describe('NewRestaurantsListComponent', () => {
  let component: NewRestaurantsListComponent;
  let fixture: ComponentFixture<NewRestaurantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRestaurantsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
