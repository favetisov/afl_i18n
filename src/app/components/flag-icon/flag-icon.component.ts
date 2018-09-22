import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flag-icon',
  templateUrl: './flag-icon.component.html',
  styleUrls: ['./flag-icon.component.scss'],
})
export class FlagIconComponent implements OnInit, OnChanges {

  @Input() public name: string;
  @Input() public height:number;

  public url:any;

  constructor(
    private sanitizer:DomSanitizer
  ) {
  }

  ngOnInit() {
    this.defineUrl(this.name);
  }

  ngOnChanges(changes) {
    if (changes.name && changes.name.currentValue != changes.name.previousvalue) {
      this.defineUrl(changes.name.currentValue);
    }
  }

  private defineUrl(name) {
    if (!name) console.warn("Failed to render flag icon: no name provided");
    this.url =  this.sanitizer.bypassSecurityTrustResourceUrl(`assets/img/flags/${name}.svg`);
  }

}
