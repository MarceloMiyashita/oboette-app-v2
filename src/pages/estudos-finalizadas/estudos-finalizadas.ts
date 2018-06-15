import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Imports adicionados
import { Observable } from 'rxjs/Observable';

// Serviço de tarefas
import { EstudosProvider } from '../../providers/estudos/estudos';

// Modelo de estudo
import { Estudos } from '../../models/estudos'


@IonicPage()
@Component({
  selector: 'page-estudos-finalizadas',
  templateUrl: 'estudos-finalizadas.html',
})
export class EstudosFinalizadasPage {

  // Atributo de lista de estudos
  estudos: Observable<Estudos[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
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
        message: 'Você aceitou escluir esta informação !',
        buttons: ['Ok']
      });
      alert.present()
    }

        // Método para abrir detalhes do estudo
        abreDetalhe(estudo:any) {
          this.navCtrl.push(DetalhePage, {curso:estudo});
          }

  // Método para exluir um estudo
  excluir(id: string) {
    this.estudosProvider.excluir(id);
  }

  ionViewDidLoad() {
    this.estudos = this.estudosProvider.pegarEstudos(true);
  }

}
