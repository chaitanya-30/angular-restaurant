import { TestBed } from '@angular/core/testing';

import { RestaurantaddService } from './restaurantadd.service';

describe('RestaurantaddService', () => {
  let service: RestaurantaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
