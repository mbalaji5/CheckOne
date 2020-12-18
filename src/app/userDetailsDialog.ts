import { Component, Input } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./productservice";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { DynamicDialogConfig } from "primeng/dynamicdialog";
import { userService } from "./userservice";
import { userDetails } from "./userDetailsModel";

@Component({
  template: `
    <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col" style="text-align:'center'">
        <img
          src="{{ individualUserDetail.avatar_url }}"
          height="200px"
          width="200px"
          align="center"
        />
      </div>
      <div class="p-field p-col">
        <label>Name:</label><label>{{ individualUserDetail.login }}</label>
        <br />
        <label>Location:</label
        ><label>{{ individualUserDetail.location }}</label
        ><br />
        <label>Email:</label><label>{{ individualUserDetail.email }}</label
        ><br />
      </div>
    </div>
  `
})
export class userDetailsDialog {
  individualUserDetail: userDetails;
  products: Product[];
  @Input() user: string;

  constructor(
    private userService: userService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.userService.getUserDetails(this.config.data).subscribe(data => {
      this.individualUserDetail = data;
    });
  }
}
