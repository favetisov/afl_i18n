import { Component, OnInit, Input } from '@angular/core';
import {Config} from "../../services/config.service";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'player-photo',
  templateUrl: './player-photo.component.html',
  styleUrls: ['./player-photo.component.scss'],
})
export class PlayerPhotoComponent implements OnInit{

  bgUrl;
  photoUrl;

  @Input() id;
  @Input() version;
  @Input() size;

  constructor(
    private sanitizer:DomSanitizer
  ) {

  }

  ngOnInit() {
    this.size = this.size+'px';



    this.bgUrl = this.sanitizer.bypassSecurityTrustStyle(
      `url('assets/img/no-user.jpg')`
    );

    if (this.id) {
      this.photoUrl =  this.sanitizer.bypassSecurityTrustStyle(
        `url('${Config.HOSTS.PHOTO}/img/players/${this.id}.jpg?version=${this.version}')`
      );
    }
  }

}
