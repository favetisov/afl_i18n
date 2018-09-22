import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: '<%= dasherize(name) %>-modal',
  templateUrl: './<%= dasherize(name) %>.modal.html',
  styleUrls: ['./<%= dasherize(name) %>.modal.scss'],
})

export class <%= classify(name) %>Modal implements OnInit {

  constructor(
    private modalController: ModalController
  ) {}

  ngOnInit() {

  }

  cancel() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(/* add returning value  here */);
  }

}
