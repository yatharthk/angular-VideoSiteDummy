import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoService } from './video.service';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideoService]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have expected properties and methods', () => {
    const expectedProperties = ['property1', 'property2'];
    const expectedMethods = ['method1', 'method2'];

    expectedProperties.forEach(prop => {
      expect(service[prop]).toBeDefined();
    });

    expectedMethods.forEach(method => {
      expect(typeof service[method]).toBe('function');
    });
  });
});