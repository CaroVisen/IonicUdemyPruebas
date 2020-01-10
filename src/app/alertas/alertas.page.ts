import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  titulo: string;

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Ingrese su nombre',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Su nombre'
        }
      ],
      buttons: [
        {
          text: 'Ingresar',
          handler: (data) => {
           console.log(data);
           //this.router.navigate(['/home']);
           this.titulo = data.nombre;
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

}
