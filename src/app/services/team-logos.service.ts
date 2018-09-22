import { Injectable } from '@angular/core';
import { RequesterService } from 'app/services/requester.service';
import { BSubject } from "app/tools/BSubject";
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TeamLogosService  {

  public readonly LS_KEY = 'team-logos';

  public logos$: BSubject< Object > = new BSubject({});

  constructor(
    private requester: RequesterService,
    private storage: Storage
  ) {
    this.init()
  }

  async init() {
    const teamLogos = await this.storage.get(this.LS_KEY);
    if (teamLogos) this.logos$.next(teamLogos);

    this.logos$.subscribe(teamLogos => {
      this.storage.set(this.LS_KEY, teamLogos);
    });

    this.logos$.next(await this.requester.load('/teams/logos'));
  }


}
