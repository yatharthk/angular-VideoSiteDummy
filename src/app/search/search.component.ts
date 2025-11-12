import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input()
  queryFromParent: string;

  searchQuery: string = "New Search";
  private reqSubscription: any;
  result: any[] = [];

  constructor(private videoService: VideoService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.queryFromParent) {
      this.searchQuery = this.queryFromParent;
    }
  }

  searchTerm(searchForm: any): void {
    console.log(searchForm.value);
    const query = searchForm.value.searchQuery || "";
    this.router.navigate(['/search', { searchQuery: query }]);
    this.reqSubscription = this.videoService.search(query).subscribe(videoItem => {
      console.log(videoItem);
      this.result = videoItem;
    });
  }

  ngOnDestroy(): void {
    if (this.reqSubscription) {
      this.reqSubscription.unsubscribe();
    }
  }
}