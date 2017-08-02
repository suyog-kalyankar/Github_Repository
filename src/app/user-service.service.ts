import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { definedConstants } from "definedConstants";

@Injectable()
export class UserServiceService {

  constructor( private http:Http) { }

  getUsers() {
    return this.http.get(definedConstants.GITHUB_USERS_URL)
    .map((res:Response) => res.json());
  }

  getUserName(name : String){
    return this.http.get(definedConstants.GITHUB_USERS_URL+"/"+name)
    .map((response : Response) => response.json());
  }
  getUserRepos(name : String){
    return this.http.get(definedConstants.GITHUB_USERS_URL+"/"+name+"/"+"repos")
    .map((response : Response) => response.json());
  }
}
