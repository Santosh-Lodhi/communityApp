import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmpService } from './emp.service';

describe('EmpService', () => {
  let service: EmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
