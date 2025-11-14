import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'VideoSite';
  caption = "Welcome to video site built on Angular";
  private routeSub: any;
  query: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['searchQuery'];
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}