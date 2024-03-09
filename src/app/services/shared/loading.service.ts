import { Injectable } from '@angular/core';
import {  BehaviorSubject, concatMap, finalize, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  public showLoaderUntilCompleted<T>(objs$:Observable<T>): Observable<T>
  {
    return  of(null)
    .pipe(
      tap(() => this.loadingOn()),
      concatMap(() => objs$),
      finalize(() => this.loadingOff())
    )
  }
 
  loadingOn(){
    this.loadingSubject.next(true);
  }

  loadingOff(){
    this.loadingSubject.next(false);
  }

  constructor() { }
}
