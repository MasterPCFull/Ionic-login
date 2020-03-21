import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SupportPage} from '../pages/support/support';
import {LoginPage} from '../pages/login/login';
import {BadgesPage} from '../pages/badges/badges';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen:SplashScreen) {
    platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    });
    this.pages = [
      
      {title: 'Login', component: LoginPage},
      {title: 'Support', component: SupportPage},
      {title: 'Informações', component: BadgesPage},
      
      
    ];
  }
  openPage(page: any): void{
   this.nav.push(page.component);
  }
}

