import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  notAvail = "NA";
  userName = "Username";
  location = "Location";
  company ="Company";
  blog = "Blog Link";
  
  u_name : String;
  u_details : any = {};
  show_repos : any = {};
 
  constructor(private activateRoute: ActivatedRoute, private userService: UserServiceService ) { }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails(){
    let name = this.activateRoute.snapshot.params['name'];
    console.log("name is "+name);
    this.userService.getUserName(name).subscribe(data => this.u_details = data);
     let url = this.userService.getUserRepos(name).subscribe(data => this.show_repos = data);
  }
}
