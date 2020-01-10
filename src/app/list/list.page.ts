import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  user: any;
  
  constructor( private dataServices: DataService) { }
  
  ngOnInit() {
    this.user = this.dataServices.getUsers();
  }
  clickYT(item){
    console.log(item);
  }


}
