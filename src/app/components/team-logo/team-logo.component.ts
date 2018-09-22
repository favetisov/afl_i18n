import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Config} from "app/services/config.service";
import {TeamLogosService} from "app/services/team-logos.service";

@Component({
  selector: 'team-logo',
  templateUrl: './team-logo.component.html',
  styleUrls: ['./team-logo.component.scss'],
})
export class TeamLogoComponent implements OnInit{

  @Input() public id:string;
  @Input() public size:number;

  public url:any;

  constructor(
    private sanitizer:DomSanitizer,
    private teamLogosService: TeamLogosService

  ) {}

  ngOnInit() {
    const logos = this.teamLogosService.logos$.getValue();
    if (this.id && logos) {
      this.defineUrl(logos);
    }

    this.teamLogosService.logos$.subscribe(logos => {
      this.defineUrl(logos);
    })

  }

  defineUrl(logos) {
    if (this.id) {
      this.url =  this.sanitizer.bypassSecurityTrustResourceUrl(`${Config.HOSTS.PHOTO}/img/teams/${this.id}.png?photoId=${logos[this.id] || 0}`);
    }
  }

}
