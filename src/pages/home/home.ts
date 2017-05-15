import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ResumeProvider} from "../../providers/resume/resume";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    resume: any;
    titles: Array<string> = [];
    debug: boolean = false;

  constructor(
      public navCtrl: NavController,
      public resumePro: ResumeProvider
  ) {
      this.resumePro.getResume()
          .then( res => {
              this.debug && console.log(res);
              this.resume = res;
              console.log(this.resume)
              return resumePro.getResumeKey();
          })
          .then((res) => {
          this.titles = res;
      })

  }

}
