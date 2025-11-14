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

  @Input() queryFromParent: string;

  searchQuery: string = "New Search";
  req: any;
  result: any[] = [];

  constructor(private videoService: VideoService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.queryFromParent) {
      this.searchQuery = this.queryFromParent;
    }
  }

  searchTerm(searchForm) {
    console.log(searchForm.value);
    let query = searchForm.value.searchQuery;
    if (query === undefined) {
      this.router.navigate(['/search', { searchQuery: "" }]);
    } else {
      this.router.navigate(['/search', { searchQuery: query }]);
    }
    this.req = this.videoService.search(query).subscribe(videoItem => {
      console.log(videoItem);
    });
  }

  ngOnDestroy() {
    if (this.req) {
      this.req.unsubscribe();
    }
  }
}