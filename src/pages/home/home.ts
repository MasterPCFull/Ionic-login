import { Component } from '@angular/core';
import {ToastController } from
'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public toastController: ToastController) {
  }

  enviarA() {

    const toast = this.toastController.create({
      message: 'APP foi Adicionado sua lista.' ,
      duration: 2000
    });
    toast.present();

  }
  enviarB() {

    const toast = this.toastController.create({
      message: 'APP foi Adicionado sua lista.' ,
      duration: 2000
    });
    toast.present();
  }
  enviarC() {

    const toast = this.toastController.create({
      message: 'APP foi Adicionado sua lista.' ,
      duration: 2000
    });
    toast.present();
  }
  enviarD() {

    const toast = this.toastController.create({
      message: 'APP foi Adicionado sua lista.' ,
      duration: 2000
    });
    toast.present();
  }
  enviarE() {

    const toast = this.toastController.create({
      message: 'APP foi Adicionado sua lista.' ,
      duration: 2000
    });
    toast.present();
  }
}
  


