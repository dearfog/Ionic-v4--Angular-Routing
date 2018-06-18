import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LayoutPage } from './pages/layout/layout.page';

import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyB22Ff1WwcwHu-k8juqdjRjAmV8Z4OMW7w",
  authDomain: "angular-man.firebaseapp.com",
  databaseURL: "https://angular-man.firebaseio.com",
  projectId: "angular-man",
  storageBucket: "angular-man.appspot.com",
  messagingSenderId: "874059671922"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    AppComponent, 
    LayoutPage
  ],
  entryComponents: [],
  imports: [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule, 
      BrowserAnimationsModule, 
      MaterialModule,
      ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
