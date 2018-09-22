import { Component, OnInit, OnChanges,  Input } from '@angular/core';

@Component({
  selector: 'language-icon',
  templateUrl: './language-icon.component.html',
  styleUrls: ['./language-icon.component.scss'],
})
export class LanguageIconComponent implements OnInit, OnChanges {

  @Input() public language: string;
  @Input() public height:number;

  public name;

  private map = {
    'en': 'united-kingdom',
    'ru': 'russia',
    'ua': 'ukraine',
    'pl': 'poland'
  };

  constructor(
  ) {}

  ngOnInit() {
    this.defineName(this.language);
  }

  ngOnChanges(changes) {
    if (changes.language && changes.language.currentValue != changes.language.previuosValue) {
      this.defineName(changes.language.currentValue);
    }
  }

  private defineName(language) {
    if (!language) return console.warn(`Failed to display language icon: no language provided`);
    this.name = this.map[language.toLowerCase()];
    if (!this.name) console.warn(`Failed to display language icon: no mapping for ${language}`);
  }


}
