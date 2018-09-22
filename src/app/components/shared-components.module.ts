import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FlagIconComponent } from "./flag-icon/flag-icon.component";
import { LanguageIconComponent } from "./language-icon/language-icon.component";
import {TeamLogoComponent} from "./team-logo/team-logo.component";
import {PlayerPhotoComponent} from "./player-photo/player-photo.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    IonicModule
    //ImageCropperModule
  ],
  declarations: [
    //StatusCheckerComponent,
    FlagIconComponent,
    LanguageIconComponent,
    TeamLogoComponent,
    PlayerPhotoComponent,
    //AImgCropperComponent
  ],
  exports: [
    //StatusCheckerComponent,
    FlagIconComponent,
    LanguageIconComponent,
    TeamLogoComponent,
    PlayerPhotoComponent,
    //AImgCropperComponent
  ],
  entryComponents: [
    //AImgCropperComponent
  ]
})
export class SharedComponentsModule {}
