import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  userList = "Github Users";
  constructor(private userService: UserServiceService) { }
  users : Observable<any>;
  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
      this.userService.getUsers().subscribe(data => this.users = data)
  }
}
