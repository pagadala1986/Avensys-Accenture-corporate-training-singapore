import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.css']
})
export class CustomDateComponent implements OnInit {
  today:any;
  constructor() {
    this.today = new Date();
  }

  ngOnInit() {
  }

}
