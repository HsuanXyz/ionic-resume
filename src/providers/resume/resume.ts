import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ResumeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ResumeProvider {

  constructor(public http: Http) {
    console.log('Hello ResumeProvider Provider');
  }

  getResume() {
    return this.http.get('../assets/resume.json')
        .toPromise()
        .then( res => res.json())
  }
}
