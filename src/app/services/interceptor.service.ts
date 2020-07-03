import { Injectable } from '@angular/core';
    import {
    HttpInterceptor, HttpRequest,
    HttpHandler, HttpEvent, HttpErrorResponse
    } from '@angular/common/http';
    import { Observable, throwError } from 'rxjs';
    import { catchError } from 'rxjs/operators';
    @Injectable({
    providedIn: 'root'
    })
    export class InterceptorService implements HttpInterceptor{
     constructor() { }
     handleError(error: HttpErrorResponse){
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
            if(error.status === 401){
                errorMessage = `Invalid Username or Password`;
            }
            else  {
                 // server-side error
                 errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
          
        }
        window.alert(errorMessage);      
      return throwError(error);
     }
    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>>{
     return next.handle(req)
     .pipe(
      catchError(this.handleError)
     )
     };
    }