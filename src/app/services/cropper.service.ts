import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AImgCropperComponent } from "app/components/a-img-cropper/a-img-cropper.component";

@Injectable({
  providedIn: 'root'
})
export class CropperService  {


  constructor(
    private modalController: ModalController
  ) {

  }

  async present(image, size = 200) {

    const modal = await this.modalController.create({
      component: AImgCropperComponent,
      componentProps: {image, size},
      cssClass: 'cropper-modal'
    });

    modal.present();

    //const modal = await this.modalController.create({
    //  component: AImgCropperComponent,
    //  componentProps: { value: 123 }
    //});

  }


}
