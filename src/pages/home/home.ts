import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RegistroPage} from "../registro/registro";
import {Storage} from "@ionic/storage";
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  correo = '';
  contra = '';

  registro = RegistroPage;
  main= MainPage;

  usuarios = [];

  constructor(public navCtrl: NavController, public alert: AlertController, public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'usuarios')) {
          this.storage.get('usuarios')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }
      });
  }

  clickSesion() 
  {
    console.log(this.correo);
    console.log(this.contra);

    let index = this.usuarios.findIndex(u => u.correo == this.correo && u.contra == this.contra);

    if (index >= 0) {
      const alerta = this.alert.create({
        title: "¡Bienvenido!",
        subTitle: "Log in Exitoso.",
        buttons: ['Ok']
      });
      alerta.present(); 
      this.navCtrl.push(this.main);
      
    }
    else {
      const alerta = this.alert.create({
        title: "¡Oh no!",
        subTitle: "No estás registrado.",
        buttons: ['Ok']
      });
      alerta.present();
    }
  }

  clickRegistro() 
  {
    this.navCtrl.push(this.registro, {usuarios: this.usuarios});
  }


}

