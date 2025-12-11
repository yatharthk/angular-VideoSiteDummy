import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers:[VideoService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {

  private routeSub: any;
  searchTerm: string;
  req: any;
  videoList: Video[];

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      params => {
        this.searchTerm = params['searchQuery'];
      }
    );
    this.search(this.searchTerm);
  }

  search(query: string): void {
    let videoListNew: Video[] = [];
    this.req = this.videoService.search(query).subscribe(data => {
      videoListNew = data as Video[];
      this.videoList = videoListNew;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  getEmbedUrl(videoItem: Video): string {
    return `https://www.youtube.com/embed/${videoItem.embed}`;
  }
}