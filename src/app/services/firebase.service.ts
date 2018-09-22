import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  auth: any;
  messaging: any;

  constructor() {
    this.auth = window['firebase'].auth();
    this.messaging = window['firebase'].messaging();
  }

  getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      })
    });
  }

}