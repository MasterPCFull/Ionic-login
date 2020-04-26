import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 

  @ViewChild ( "username") uname;
  @ViewChild ("password") password;
  pushPage: any;
  
  
  constructor(public navCtrl: NavController, 
    public alertCtrl: AlertController) {
    
      this.pushPage = WelcomePage 

  }
    signIn(){
       if (this.uname.value == "Admin" && this.password.value == "12345678") {
      
      this.navCtrl.push ( WelcomePage);}
      
        
      
      
        
      else {
      this.mostrarAlert(); }
      
      }
      
      mostrarAlert(){ 
        let alert = this.alertCtrl.create({
          title: 'Usuario ou Senha Incorretos ',
          subTitle: 'Digite novamente ou entre contato com support!',
          buttons: ['OK']
        });
        alert.present();
   
        
  }
  
    }


  


