import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  today:any;
  firstname:string;
  lastname:string;
  productPrice:any;
  discountPrice:any;
  discountPercent:any;
  userData:any;
  courses:any;
  constructor() {
    this.firstname = 'murali';
    this.lastname = 'PaGaDaLa';
    this.productPrice = 300000;
    this.discountPrice = 18.4345454;
    this.userData = {
      name: this.firstname+' '+this.lastname,
      productprice: this.productPrice,
      discountprice: this.discountPrice
    }

    this.discountPercent = 18.899999;

    this.courses = ['Angular','ReactJs','VUEJS','NodeJs','ExpressJs']


  }

  ngOnInit() {
    this.today = new Date();
    console.log(this.gstCalculation());
  }

  gstCalculation():Observable<any>{
    return this.productPrice + (this.productPrice * this.discountPercent/100);
  }

}
