import { Component,OnInit } from "@angular/core";
import { userDetails, userList } from "./userDetailsModel";
import { userService } from "./userservice";
import { Observable } from 'rxjs';

 

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",  
})

export class AppComponent  implements OnInit{
  gitHubUsers: userList;
  individualUserDetail:userDetails;
  gitHubUsersList:userDetails[];
  displayPopUp =false;


  data:Observable<any>;

  constructor(private userService: userService) {
 
   
  }

  ngOnInit() {

   
    this.userService.getUsers().subscribe(da=>{ console.log("##da",da); this.gitHubUsersList=da});
  console.log("##",this.data);
  }

  ViewUserPopUp(id: string){
  this.userService.getUserDetails(id).subscribe(data => {this.individualUserDetail = data;
  this.displayPopUp = true;
  });

  }

  ClosePopUp(){
    this.displayPopUp = false;
  }

SearchClick(searchedString : string){
  if(searchedString !=undefined && searchedString != '' && searchedString !=null)
  {
    //trimEnd -> under the assumption that user might search for 'space+Last name'
  //  this.userService.getUserlist(searchedString.trimEnd()).subscribe(data => {
  //    console.log('called');
  //  if(data !=undefined){
  //    this.gitHubUsers = data;
  //    this.gitHubUsersList = data.items;
  //  }
  //  });
   searchedString='';
   }
  }





}
  

