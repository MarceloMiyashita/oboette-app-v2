//import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Para usar o serviço de banco de dados é necessário importar o AngularFirestoreModule
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { SlidesPage } from '../pages/slides/slides';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


// Importação da página de login
import { LoginPage } from '../pages/login/login';
import { EstudosProvider } from '../providers/estudos/estudos';


// Adicionado páginas de Adicionar estudo e  listar estudo concluídos
import { AdicionarEstudoPage } from '../pages/adicionar-estudo/adicionar-estudo';
import { EstudosFinalizadasPage } from '../pages/estudos-finalizadas/estudos-finalizadas';
// Configurações do FIREBASE
import { config } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    TabsPage,
    LoginPage, // Registrando a página de login
    AdicionarEstudoPage, // Registrando a página de adicionar estudo
    EstudosFinalizadasPage, // Registrando a página de estudo finalizadas
    DetalhePage,
    SlidesPage
   // ChatPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
        // Configurações do Firebase
        AngularFireModule.initializeApp(config),
        // Configuração do serviço de autenticação do firebase
        AngularFireAuthModule,
        // Configuração do serviço de banco de dados do firebase
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        IonicModule.forRoot(MyApp, {}, {
          links: [
            //adicionado deep links que levam  a um determinado conteúdo
           { component: HomePage, name: 'Home', segment: 'home' },
           { component: DetalhePage, name: 'Detalhe', segment: 'detalhe' },
           { component: AboutPage, name: 'About', segment: 'about' },
           { component: LoginPage, name: 'Login', segment: 'login' },
           { component: SlidesPage, name: 'Slide', segment: 'slide' },
           { component: TabsPage, name: 'Tabs', segment: 'tabs' },
           { component: AdicionarEstudoPage, name: 'AdicionarEstudo', segment: 'adicionar-estudo' },
           { component: EstudosFinalizadasPage, name: 'FinalizadaEstudo', segment: 'estudos-finalizadas' }  
         ]
       })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    TabsPage,
    LoginPage, // Registrando a página de login
    AdicionarEstudoPage, // Registrando a página de adicionar estudo
    EstudosFinalizadasPage, // Registrando a página de estudo finalizado
    DetalhePage,
    SlidesPage
    //ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EstudosProvider
  ]
})
export class AppModule {}
