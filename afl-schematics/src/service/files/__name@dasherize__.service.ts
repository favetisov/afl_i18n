import { Injectable } from '@angular/core';
import { RequesterService } from 'app/services/requester.service';
import { BSubject } from "app/tools/BSubject";
import { Storage } from '@ionic/storage';
import { UserService } from "app/services/user.service";

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Service  {

  public readonly LS_KEY = '<%= dasherize(name) %>';

  public <%= camelize(name) %>$: BSubject< /* todo add type */> = new BSubject( /* todo add value */);

  constructor(
    private requester: RequesterService,
    private storage: Storage,
    private userService: UserService
  ) {
    this.init()
  }

  async init() {
    const <%= camelize(name) %> = await this.storage.get(this.LS_KEY);
    if (<%= camelize(name) %>) this.<%= camelize(name) %>$.next(<%= camelize(name) %>);

    this.<%= camelize(name) %>$.subscribe(<%= camelize(name) %> => {
      this.storage.set(this.LS_KEY, <%= camelize(name) %>);
    });
  }


}
