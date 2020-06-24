import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const pageData = (<any> window).AppSettings;
    let jwtToken;
    if (pageData && pageData.jwtToken) jwtToken = pageData.jwtToken;
    let newHeaders = request.headers;
    if (jwtToken) {
        // If we have a token, we append it to our new headers
        newHeaders = newHeaders.append('Authorization', `Bearer ${jwtToken}`);
        newHeaders = newHeaders.append('X-JWT-Assertion', jwtToken);
    }
    // Finally we have to clone our request with our new headers
    // This is required because HttpRequests are immutable
    const authReq = request.clone({headers: newHeaders});
    // Then we return an Observable that will run the request
    // or pass it to the next interceptor if any
    return next.handle(authReq);

  }
}
