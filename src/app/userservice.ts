import { HttpClient , HttpParams} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { delay } from "rxjs/operators";
import "rxjs/add/observable/of";
import { userDetails, userList } from "./userDetailsModel";
import { Observable } from "rxjs";

@Injectable()
export class userService {
  userDetailsUrl: string;
  userListUrl: string;

  constructor(private http: HttpClient) {
    this.userDetailsUrl = "https://api.github.com/users";
    this.userListUrl ="https://api.github.com/search/users?q=";
  }

  public getUserlist(searchedString:string): Observable<any> {
if(searchedString != undefined){
 this.userListUrl = this.userListUrl+searchedString;
 searchedString = null;
    return this.http.get<any>(this.userListUrl);
}
this.userListUrl='';
  }

  public getUserDetails(userName: string): Observable<userDetails> {
    return this.http.get<userDetails>(`${this.userDetailsUrl}/${userName}`);
  }
  public getUsers(): Observable<userDetails[]> {
    return this.http.get<userDetails[]>(this.userDetailsUrl);
  }
}
