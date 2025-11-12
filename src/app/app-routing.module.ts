import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "videos", component: VideoListComponent },
  { path: "videos/:slug", component: VideoDetailComponent },
  { path: "search", component: SearchDetailComponent },
  { path: "**", redirectTo: "" } // Added 404 redirect for security and performance
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })], // Improved performance and user experience
  exports: [RouterModule]
})
export class AppRoutingModule { }