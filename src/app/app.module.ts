import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {WelcomePage} from '../pages/welcome/welcome';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SupportPage} from '../pages/support/support';
import {LoginPage} from '../pages/login/login';
import {BadgesPage} from '../pages/badges/badges';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SupportPage,
    WelcomePage,
    BadgesPage
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SupportPage,
    WelcomePage,
    BadgesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
