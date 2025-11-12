import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-details',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  private req: any;
  slug: string;
  video: Video;

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private router: Router) {}

  ngOnInit(): void {
    this.getBySlug();
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.req) {
      this.req.unsubscribe();
    }
  }

  getBySlug(): void {
    this.routeSub = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug'];
      this.req = this.videoService.get(this.slug).subscribe(data => {
        this.video = <Video>data[0];
      }, error => {
        console.error('Error fetching video:', error);
        this.router.navigate(['/error']);
      });
    });
  }

  getEmbedUrl(videoItem: string): string {
    return `https://www.youtube.com/embed/${encodeURIComponent(videoItem)}`;
  }
}