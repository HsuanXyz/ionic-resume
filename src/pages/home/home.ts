import { Component, ViewChildren, ViewChild } from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {ResumeProvider} from "../../providers/resume/resume";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    resume: any;

    debug: boolean = false;

    @ViewChild(Content) content: Content;

    @ViewChild('languages') languages;
    @ViewChild('skills') skills;
    @ViewChild('publications') publications;
    @ViewChild('work') work;
    @ViewChild('education') education;
    @ViewChild('basics') basics;

  constructor(
      public navCtrl: NavController,
      public params: NavParams,
      public resumePro: ResumeProvider
  ) {
      this.resumePro.getResume()
          .then( res => {
              this.debug && console.log(res);
              this.resume = res;
              return resumePro.getResumeKey();
          })

  }

    ionViewDidEnter() {
      let params = this.params.data;
      if( !params.t || !this[params.t]){
         return
      }
        this.content.scrollTo(0,this[params.t].nativeElement.offsetTop,500);
    }

}
