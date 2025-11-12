import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoListComponent } from './video-list.component';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial properties set', () => {
    expect(component).toBeDefined();
  });
});