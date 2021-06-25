import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((userData)=>{
      console.log('Users from local db');
      console.log(userData)
    });
  }

}
