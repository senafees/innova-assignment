import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoadingService } from './shared/loading.service';
@Injectable()
export class DashboardService {

  private subject = new BehaviorSubject<any>([]);
  postData$: Observable<any[]> | null   = this.subject.asObservable();

  constructor(private http: HttpClient, private loading: LoadingService) { }

  getPosts(){
    
    //return this.http.get<any>("https://jsonplaceholder.typicode.com/posts")

    const loadposts$ = this.http.get<any[]>("https://jsonplaceholder.typicode.com/posts")
    .pipe(
      catchError(err =>
        {
          return throwError(() => new Error('error while loading posts'));            
        }),
        tap((posts: any[]) => this.subject.next(posts))
        
    );    
   
  this.loading.showLoaderUntilCompleted(loadposts$).subscribe();
      
  }

  
}
