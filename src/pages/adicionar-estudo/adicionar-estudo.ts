import { LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importações necessárias

// Importação do serviço de estudo
import { EstudosProvider } from '../../providers/estudos/estudos';

// Importação do modelo de estudo
import { Estudos } from '../../models/estudos'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de um estudo
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-adicionar-estudo',
  templateUrl: 'adicionar-estudo.html',
})
export class AdicionarEstudoPage {
  // adicionado formulario para criar validação
  formAdicionar: FormGroup;

  // Definição do atributo estudo que será usado para o cadastro
  public estudo = {} as Estudos;

  // Adicionando o serviço de estudo no construtor
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private estudosProvider:EstudosProvider,
              public loadingCtrl: LoadingController,
              public formBuilder: FormBuilder) {
                
            this.formAdicionar = this.createMyForm();
  }
  saveData(){
    console.log(this.formAdicionar.value);
  }
  
  // metodo criado para validar os campos do formulario de adicionar kana
  private createMyForm(){
    return this.formBuilder.group({
      date: ['', Validators.required],
      nome: ['', Validators.required],
      palavra: ['', Validators.required],
      kanji: ['', Validators.required],
      leitura: ['', Validators.required],
      traducao: ['', Validators.required],
      url: ['', Validators.required]
      
    });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde, você está sendo redirecionado...",
      duration: 1000
    });
    loader.present();
  }

  // Método que será usado para adicionar um estudo
  adicionarEstudo(estudo: Estudos) {
      estudo.finalizada = false;
      this.estudosProvider.adicionar(estudo);
      this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarEstudoPage');
  }

}
