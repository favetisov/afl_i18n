import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from 'app/components/shared-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { <%= classify(name) %>Page } from './<%= dasherize(name) %>.page';

const routes: Routes = [
  {
    path: '',
    component: <%= classify(name) %>Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedComponentsModule,
    FormsModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [<%= classify(name) %>Page]
})
export class <%= classify(name) %>PageModule {}
