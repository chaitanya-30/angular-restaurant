import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsaurantsComponent } from './restsaurants.component';

describe('RestsaurantsComponent', () => {
  let component: RestsaurantsComponent;
  let fixture: ComponentFixture<RestsaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestsaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
