import { Component, OnInit } from "@angular/core";
import { userDetails, userList } from "./userDetailsModel";
import { userService } from "./userservice";
import { Observable } from "rxjs";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { userDetailsDialog } from "./userDetailsDialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [DialogService]
})
export class AppComponent implements OnInit {
  gitHubUsers: userList;
  individualUserDetail: userDetails;
  gitHubUsersList: userDetails[];
  displayPopUp = false;
  ref: DynamicDialogRef;

  data: Observable<any>;

  constructor(
    public dialogService: DialogService,
    private userService: userService
  ) {}

  ViewUserPopUp(login: string) {
    this.ref = this.dialogService.open(userDetailsDialog, {
      width: "40%",
      contentStyle: { "max-height": "500px", overflow: "auto" },
      baseZIndex: 10000,
      data: login
    });
  }

  ClosePopUp() {
    this.displayPopUp = false;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(da => {
      console.log("##da", da);
      this.gitHubUsersList = da;
    });
    console.log("##", this.data);
  }

  SearchClick(searchedString: string) {
    if (
      searchedString != undefined &&
      searchedString != "" &&
      searchedString != null
    ) {
      //trimEnd -> under the assumption that user might search for 'space+Last name'
      //  this.userService.getUserlist(searchedString.trimEnd()).subscribe(data => {
      //    console.log('called');
      //  if(data !=undefined){
      //    this.gitHubUsers = data;
      //    this.gitHubUsersList = data.items;
      //  }
      //  });
      searchedString = "";
    }
  }
}
