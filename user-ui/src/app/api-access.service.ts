import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService {

  constructor(private http: HttpClient) {}
  endpoint: string = "http://localhost:5000/api";

  AddUsers(data: any){
    let API_URL = `${this.endpoint}/add_user/`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  Login(data:any){
    let API_URL = `${this.endpoint}/login/`;
    return this.http.post(API_URL, data)
    .pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
