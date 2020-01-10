import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data = Array(100); 
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    console.log("holu")
  }
}
