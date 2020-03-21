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
       if (this.uname.value == "x" && this.password.value == "x") {
      
      this.navCtrl.push ( WelcomePage);}
      
        
      
      
        
      else {
      this.mostrarAlert(); }
      
      }
      
      mostrarAlert(){ 
        let alert = this.alertCtrl.create({
          title: 'Erro Usuario ',
          subTitle: 'Digite senha incorreta!',
          buttons: ['OK']
        });
        alert.present();
   
        
  }
  
    }


  


