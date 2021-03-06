import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { DefinedConstants } from "app.definedConstants";

@Injectable()
export class UserServiceService {
 

  constructor( private http:Http, private definedConst : DefinedConstants) { }

  getUsers() {
    return this.http.get(this.definedConst.GITHUB_USERS_URL)
    .map((res:Response) => res.json());
  }

  getUserName(name : String){
    return this.http.get(this.definedConst.GITHUB_USERS_URL+"/"+name)
    .map((response : Response) => response.json());
  }
  getUserRepos(name : String){
    return this.http.get(this.definedConst.GITHUB_USERS_URL+"/"+name+"/"+this.definedConst.GITHUB_REPOS)
    .map((response : Response) => response.json());
  }
}
