import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")
  }
}
