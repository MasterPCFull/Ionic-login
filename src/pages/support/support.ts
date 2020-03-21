import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  user: string = '';
  tel: string = '';
  
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
}
ionViewDidLoad() {
console.log('ionViewDidLoad AlertsPage');
}
mostrarAlert() {
let prompt = this.alertCtrl.create({
title: 'Digite Seus Dados',
message: "Digite seu E-mail e Telefone",
inputs: [
{
name: 'Email',
placeholder: 'E-mail'

},
{
name: 'Tel',
placeholder: 'Telefone'
},

],
buttons: [
{
text: 'Cancelar',
handler: data => {
console.log('Clicou no Cancelar');
}
},
{
text: 'Enviar',
handler: data => {
this.user ="E-mail: " + data.Email ;
this.tel =  "Telefone: " + data.Tel + " ----> "
 + "enviado com sucesso" ; 


console.log('Clicou no Enviar');
}
}
]
});
prompt.present();
}
}