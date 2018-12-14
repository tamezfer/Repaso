import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nombre= '';
  correo = '';
  contra = '';
  telefono= '';
  usuarios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController, public storage: Storage) {
    this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro() {
    if (this.contra.length>7)
    {
      console.log(this.correo);
      console.log(this.contra);
      this.usuarios.push({
        correo: this.correo,
        contra: this.contra
      });
    }
    else
    {
      const alert = this.alert.create({
        title: 'Oops!',
        subTitle: 'Inserte usuario y contraseña de más de 8 caracteres.',
        buttons: ['OK']
      });
      alert.present();
    }
   
    
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }

}
