import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {

  req: any;
  videoList: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.req = this.videoService.list().subscribe(data => {
      console.log(data);
      this.videoList = typeof data === 'string' ? JSON.parse(data) : data;
    });
  }

  ngOnDestroy(): void {
    if (this.req) {
      this.req.unsubscribe();
    }
  }

  getEmbedUrl(videoItem: { embed: string }): string {
    return `https://www.youtube.com/embed/${videoItem.embed}`;
  }
}