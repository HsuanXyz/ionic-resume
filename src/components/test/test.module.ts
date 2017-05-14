import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestComponent } from './test';

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    IonicPageModule.forChild(TestComponent),
  ],
  exports: [
    TestComponent
  ]
})
export class TestComponentModule {}
