import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculoPage } from './calculo';

@NgModule({
  declarations: [
    CalculoPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculoPage),
  ],
})
export class CalculoPageModule {}
