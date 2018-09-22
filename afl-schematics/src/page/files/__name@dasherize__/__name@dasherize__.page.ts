import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Config } from "app/services/config.service";

@Component({
  selector: '<%= dasherize(name) %>-page',
  templateUrl: './<%= dasherize(name) %>.page.html',
  styleUrls: ['./<%= dasherize(name) %>.page.scss'],
  host: { 'class': Config.DEVICE_MODE+' '+Config.PLATFORM }
})

export class <%= classify(name) %>Page implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {

  }

}
