import { Component } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';

import { Config } from "./services/config.service";

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appReady: boolean;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private platform: Platform
  ) {
  }

  async ngOnInit() {

    window.addEventListener('resize', (event) =>  this.defineDeviceMode() );
    this.defineDeviceMode();

    this.platform.ready(),

    this.titleService.setTitle(Config.APP_NAME);
    this.metaService.addTag({name: 'theme-color', content: Config.THEME_COLOR});

    document.getElementById('splash').style.display = 'none';
    this.appReady = true;

  }

  private async defineDeviceMode() {

    if (this.platform.is('mobile')) {
      Config.DEVICE_MODE = 'mobile';
    } else {
      Config.DEVICE_MODE = 'desktop';
    }

    Config.PLATFORM = this.platform.is('ios') ? 'iOS' : 'android';
  }


}
