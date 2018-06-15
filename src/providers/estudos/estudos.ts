import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Importações necessárias
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth'
import { Estudos } from '../../models/estudos'

@Injectable()
export class EstudosProvider {

  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de estudos
  private estudosCollection: AngularFirestoreCollection<Estudos>;

  // Lista de estudos
  tasks: Observable<Estudos[]>;

  // Parametros que vamos injetar no construtor
  constructor(private afs: AngularFirestore, private auth: AuthProvider) {
    
    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {
      
      // Verifica se está logado e adiciona o caminho, usaremos o email
      // como caminho para ficar mais fácil identificar as tarefas de cada usuário
      if(auth != null)
      {
        this.caminho = '/' + auth.email;
        this.estudosCollection = afs.collection<Estudos>(this.caminho, ref => {
          return ref;
        });

      } else {
        this.caminho = '';
      }
    });
  }

  // Este método será retornado uma lista de estudos pode ser
  // as finalizadas ou as que ainda não foram finalizadas
  // para filtrar passamos o parametro finalizada
  pegarEstudos(finalizada: boolean) {
    return this.afs
      .collection<Estudos>(this.caminho, ref => {
        return ref.where('finalizada', '==', finalizada);
      })
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Estudos;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      });
  }

  // Método usado para adicionar um estudo
  adicionar(estudo: Estudos) {
    this.estudosCollection.add(estudo);
  }

  // Método usado para atualizar um estudo
  atualizar (id: string, task:Estudos) {
    this.estudosCollection.doc(id).update(task);
  }

  // Método usado para excluir um estudo
  excluir (id: string) {
    this.estudosCollection.doc(id).delete();
  }

}
