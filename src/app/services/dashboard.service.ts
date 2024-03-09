import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoadingService } from './shared/loading.service';
import { BlogModel } from '../models/blogs/blog.model';
@Injectable()
export class DashboardService {

  private subject = new BehaviorSubject<BlogModel[]>([]);
  postData$: Observable<BlogModel[]> | null   = this.subject.asObservable();

  constructor(private http: HttpClient, private loading: LoadingService) { 
    this.getPosts();  
  }

  getPosts(){
    
    const loadposts$ = this.http.get<BlogModel[]>("https://jsonplaceholder.typicode.com/posts")
    .pipe(
      catchError(err =>
        {
          return throwError(() => new Error('error while loading posts'));            
        }),
        tap((posts: BlogModel[]) => this.subject.next(posts))
        
    );    
   
  this.loading.showLoaderUntilCompleted(loadposts$).subscribe();
      
  }

  
}
