import { TestBed } from '@angular/core/testing';

import { Ng2ChartsWrapperService } from './ng2-charts-wrapper.service';

describe('Ng2ChartsWrapperService', () => {
  let service: Ng2ChartsWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2ChartsWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
