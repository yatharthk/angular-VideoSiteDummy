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
  req: any;
  result: any[] = [];

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {
    if (this.queryFromParent) {
      this.searchQuery = this.queryFromParent;
    }
  }

  searchTerm(searchForm: any): void {
    console.log(searchForm.value);
    let query = searchForm.value.searchQuery;
    if (query === undefined) {
      this.router.navigate(['/search', { searchQuery: "" }]);
    } else {
      this.router.navigate(['/search', { searchQuery: query }]);
    }
  }

  ngOnDestroy(): void {
    if (this.req) {
      this.req.unsubscribe();
    }
  }
}