import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  u_name : String;
   show_repos : Observable<any>;
  constructor(private userService:UserServiceService, private activateRoute: ActivatedRoute) {}
 
  ngOnInit() {
    console.log("here in repo")
     let name = this.activateRoute.snapshot.params['name'];
     this.userService.getUserRepos(name).subscribe(data => this.show_repos = data);
  }
}
