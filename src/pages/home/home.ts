import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';

// Imports adicionados
import { Observable } from 'rxjs/Observable';

// Serviço de autenticação que será usado para fazer o logout
import { AuthProvider } from '../../providers/auth/auth'

// Página de login, para onde o usuário que fizer logout sera direcionado
import { LoginPage } from '../login/login';

// Página para adicionar um estudos
import { AdicionarEstudoPage } from '../adicionar-estudo/adicionar-estudo';

// Serviço de estudos
import { EstudosProvider } from '../../providers/estudos/estudos';

// Modelo de estudos
import { Estudos } from '../../models/estudos'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Atributo de lista de estudo
  estudos: Observable<Estudos[]>;



  // Adição dos serviços de autenticação e de estudo no construtor
  constructor(public navCtrl: NavController,
              private auth: AuthProvider, 
              private estudosProvider:EstudosProvider,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

  }

  //metodo para carregar um loading na tela
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde, você está sendo redirecionado...",
      duration: 1000
    });
    loader.present();
  }

  //metodo de alerta na tela
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atenção !',
      message: 'Você aceitou excluir esta informação !',
      buttons: ['Ok']
    });
    alert.present()
  }

    // Método para abrir detalhes do estudo
    abreDetalhe(estudo:any) {
    this.navCtrl.push(DetalhePage, {curso:estudo});
    }

  // Método para adicionar um estudo
  adicionar () {
    this.navCtrl.push(AdicionarEstudoPage);
  }

  // Método para setar um estudo como finalizada
  finalizar(estudo: Estudos) {
    estudo.finalizada = true;
    this.estudosProvider.atualizar(estudo.id, estudo);
  }

  // Método para exluir um estudo
  excluir(id: string) {
    this.estudosProvider.excluir(id);
  }

  // Método para sair do aplicativo e direcionar para o login
  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(LoginPage);
     });
  }

  ionViewDidLoad() {
    // Busca todos os estudos do usuário que não foram concluídas
    this.estudos = this.estudosProvider.pegarEstudos(false);
  }
}
