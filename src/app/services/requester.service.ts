import { Injectable } from '@angular/core';
import { Config } from 'app/services/config.service';

import { catchError, first } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import {Observable, of, throwError} from "rxjs/index";
import {FirebaseService} from "./firebase.service";
import {ToastService} from "./toast.service";

export interface RequesterOptions {
  url: string;
  host?: string;
  method?: string;
  params?: any;
  query?: any;
  noHeaders?: boolean;
  responseType?: "text" | "arraybuffer" | "blob" | "json";
}

@Injectable({
  providedIn: 'root',
})
export class RequesterService {

  constructor(
    private http: HttpClient,
    private firebase: FirebaseService,
    private toastService: ToastService
  ) {
  }

  /** we are defining two different signatures so we can use simple mode call like load('http://google.com') */
  async load(url: string);
  async load(options: RequesterOptions);

  async load(argument: any): Promise<any> {

    let options: RequesterOptions = (typeof argument == 'string') ?  {url: argument} : argument;

    if (!options.host) {
      options.host = (options.url.indexOf('http') == 0) ? '' : Config.HOSTS.API;
    }
    options.url = options.host+options.url;
    options.method = options.method || 'GET';
    options.params = options.params || {};
    options.query = options.query || {};
    options.responseType = options.responseType || null;

    let headers = new HttpHeaders();

    return this.http.request(options.method, options.url, {
      body: options.params,
      headers: headers,
      responseType: options.responseType
    }).pipe(
      catchError(
        (error: any, caught: Observable<HttpEvent<any>>) => {
          this.handleError(error);
          return throwError(error);
        }
      )
    ).toPromise();
  }

  private async handleError(error) {

    console.log(error.status, 'status', error);

    let message;
    if (error.statusText == 'Unknown Error') {
      message = 'Server error';
    } else  if (error.status == 0) {
      message = 'Connection lost';
    } else if (error.status == 500 || error.status == 502 || error.status == 504) {
      message = 'Server Error';
    } else {
      message = error.message;
    }

    this.toastService.error(message);
  }


}
