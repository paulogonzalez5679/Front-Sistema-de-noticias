import { TestBed } from '@angular/core/testing';

import { VerNoticiasService } from './ver-noticias.service';

describe('VerNoticiasService', () => {
  let service: VerNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
