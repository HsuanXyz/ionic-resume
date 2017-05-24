import {Component, ViewChild} from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ResumeProvider} from "../providers/resume/resume";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  menu: Array<{title: string, target: string}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public resumePro: ResumeProvider) {
    this.initializeApp();

    this.resumePro.getResumeKey()
        .then( res => {
          this.menu = res;
        });
    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(this.rootPage,{
      t:page.target
    });
  }
}
