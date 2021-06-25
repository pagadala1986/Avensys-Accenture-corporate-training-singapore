import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    let user = sessionStorage.getItem('Username');
    let pwd = sessionStorage.getItem('Password');
    this.isLoggedIn = (user=='Avensys' && pwd=='Avensys123')?true:false;
    //alert(this.isLoggedIn);
  }

}
