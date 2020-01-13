import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Batman', 'Superman', 'Wonder Woman']

  constructor() { }

  ngOnInit() {
  }

  reorder( event ){
    console.log(event);
    event.detail.complete();
  }
}
