import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
 //criado uma variavel chamada curso para listagem que quero exibir
 curso: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //este objeto this.curso será exibido no html e o get vem da variavel lá do home.ts 
    this.curso = this.navParams.get('curso');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
