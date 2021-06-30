import { Component, OnInit } from '@angular/core';
import {Company} from '../company'

@Component({
  selector: 'app-display-custom-pipes',
  templateUrl: './display-custom-pipes.component.html',
  styleUrls: ['./display-custom-pipes.component.css']
})
export class DisplayCustomPipesComponent implements OnInit {
  company:Company;
  message:string;
  user:any;
  today:any;
  constructor() {
    this.message = 'Custom Pipe Examples';
    this.user = {
      firstname:'Murali',
      lastname:'Pagadala'
    }
  }

  ngOnInit() {
    this.today = new Date();
    this.company = new Company('Accenture','Singapore');
  }

}
