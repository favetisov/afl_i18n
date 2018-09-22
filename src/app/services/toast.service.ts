import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService  {


  constructor(
    private toastController: ToastController
  ) {
  }

  async error(message: string) {

    const toast = await this.toastController.create({
      message: message.slice(0, 100),
      duration: 2000,
      position: 'top',
      cssClass: 'error-toast'
    });
    toast.present();
  }

  async success(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      cssClass: 'message-toast'
    });
    toast.present();
  }

}
