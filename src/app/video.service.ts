import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Video } from './video';

const endpoint="assets/json/videos.json";
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(private http:HttpClient) { }

  list(){
   return this.http.get(endpoint).pipe(
    map(response=>response as Video[]),
    catchError(err=>this.handleError(err))
  );

  get(slug: string){
    return this.http.get(endpoint).pipe(
     map(response=>(response as Video[]).find(item=>item.slug === slug)),
     catchError(err=>this.handleError(err))
   )
  }

  search(query:string){
    return this.http.get(endpoint).pipe(map(response=>
      (response as Video[]).filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
    )),
    catchError(err=>this.handleError(err));
   }

  private handleError(error:any){
    console.log(error);
    return [];
  }
}