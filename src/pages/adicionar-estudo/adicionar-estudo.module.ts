import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarEstudoPage } from './adicionar-estudo';

@NgModule({
  declarations: [
    AdicionarEstudoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarEstudoPage),
  ],
})
export class AdicionarEstudoPageModule {}
