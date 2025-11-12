import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [VideoService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  searchTerm: string;
  req: Subscription;
  videoList: Video[];

  constructor(private route: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      (params: Params) => {
        this.searchTerm = params['searchQuery'];
        this.search(this.searchTerm);
      }
    );
  }

  search(query: string): void {
    if (this.req) {
      this.req.unsubscribe();
    }
    this.req = this.videoService.search(query).subscribe((data: Video[]) => {
      this.videoList = data;
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.req) {
      this.req.unsubscribe();
    }
  }

  getEmbedUrl(videoItem: Video): string {
    return `https://www.youtube.com/embed/${videoItem.embed}`;
  }
}