import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteOfPeopleComponent } from './taste-of-people.component';

describe('TasteOfPeopleComponent', () => {
  let component: TasteOfPeopleComponent;
  let fixture: ComponentFixture<TasteOfPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasteOfPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasteOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
