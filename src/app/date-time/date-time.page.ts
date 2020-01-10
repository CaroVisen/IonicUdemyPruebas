import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaP: any;
  fecha: Date;
  constructor() { }

  ngOnInit() {
  }

  onFecha(fecha){
    console.log(fecha);
  }
}
