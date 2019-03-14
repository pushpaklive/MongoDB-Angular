import { TestBed } from '@angular/core/testing';

import { FlatMaintenanceService } from './flat-maintenance.service';

describe('FlatMaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlatMaintenanceService = TestBed.get(FlatMaintenanceService);
    expect(service).toBeTruthy();
  });
});
