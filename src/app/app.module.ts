import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ProductService } from "./productservice";
import {DialogModule} from 'primeng/dialog';
import { TableModule } from "primeng/table";
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { userService } from "./userservice";
import { userDetailsDialog } from "./userDetailsDialog";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    HttpClientModule,
    DynamicDialogModule    
  ],
  declarations: [AppComponent,userDetailsDialog],
  bootstrap: [AppComponent],
  providers: [userService]
})
export class AppModule {}
