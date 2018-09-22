import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from "ngx-img-cropper";
import { NavParams, Platform } from '@ionic/angular';

@Component({
  selector: 'a-img-cropper',
  templateUrl: './a-img-cropper.component.html',
  styleUrls: ['./a-img-cropper.component.scss']
})
export class AImgCropperComponent {

  data;
  cropperSettings: CropperSettings;

  test = 'not';

  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;


  constructor(
    private navParams: NavParams,
    private platform: Platform
  ) {

    const size = this.navParams.get('size');

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.croppedWidth = size;
    this.cropperSettings.canvasWidth = this.platform.width();
    this.cropperSettings.canvasHeight = this.platform.height() - 50;

    this.data = {};
  }
  ngOnInit() {

    let image:HTMLImageElement = new Image();
    image.src = this.navParams.get('image');
    image.addEventListener('load', (data) => {
      this.cropper.setImage(image);
    });

  }

  //close() {
  //  this.viewController.dismiss();
  //}
  //
  //save() {
  //  this.viewController.dismiss({image: this.cropper.image.image});
  //}

}
