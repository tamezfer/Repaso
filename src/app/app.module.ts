import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegistroPage} from "../pages/registro/registro";
import {IonicStorageModule} from "@ionic/storage";
import { MainPage } from '../pages/main/main';
import { ProductoPage } from '../pages/producto/producto';
import { CarritoPage } from '../pages/carrito/carrito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    MainPage,
    ProductoPage,
    CarritoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    MainPage,
    ProductoPage,
    CarritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
