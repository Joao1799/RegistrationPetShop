import { TestBed } from '@angular/core/testing';

import { ServiceMainService } from './service-main.service';

describe('ServiceMainService', () => {
  let service: ServiceMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
