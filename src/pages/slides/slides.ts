import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';


//@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  slides = [
    {
      title: "Sobre a língua japonesa",
      description: "Este aplicativo em web foi desenvolvido com a finalidade de ajudar qualquer pessoa que tenha interesse em aprender a língua japonesa.",
      image: "assets/imgs/logo.png",
    },
    {
      title: "Tabela de Hiragana",
      description: "Tabela de Hiragana para aprender novas palavras",
      image: "assets/imgs/hiragana.png",
    },
    {
      title: "Tabela de Katakana",
      description: "Tabela de Katakana para aprender novas palavras",
      image: "assets/imgs/katakana.png",
    }

  ];

}
