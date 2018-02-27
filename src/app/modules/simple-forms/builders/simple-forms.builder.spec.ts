import { TestBed, inject } from '@angular/core/testing';
import { SimpleFormBuilder } from './simple-forms.service';


describe('SimpleFormBuilder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleFormBuilder]
    });
  });

  it('should be created', inject([SimpleFormBuilder], (service: SimpleFormBuilder) => {
    expect(service).toBeTruthy();
  }));
});
