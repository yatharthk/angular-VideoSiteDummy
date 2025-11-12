import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Video } from './video';
import { of } from 'rxjs';

const endpoint="assets/json/videos.json";
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http:HttpClient) { }

  list(){
   return this.http.get<Video[]>(endpoint).pipe(
    catchError(err=>this.handleError(err))
   );
  }

  get(slug: string){
    return this.list().pipe(
     map(response=>response.find(item=>item.slug === slug))
   );
  }

  search(query:string){
    return this.list().pipe(
     map(response=>response.filter(item=>item.name.toLowerCase().includes(query.toLowerCase())))
   );
  }

  private handleError(error:any){
    console.log(error);
    return of([]);
  }
}