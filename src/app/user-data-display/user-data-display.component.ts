import { Component, OnInit,Input,AfterViewInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit{

  @Input('userList') UserList ;
  constructor(private userService:UsersService) {
    console.log(this.UserList);
  }

  ngOnInit() {
    //debugger;
    this.userService.getAllUsers().subscribe((userData)=>{
      console.log('Users from local db');
      console.log(userData)
    });
  }
  ngAfterViewChecked(){
    //alert('ngAfterViewChecked');
    if(this.UserList.length>0){
      console.log(this.UserList);
    }
  }
}
