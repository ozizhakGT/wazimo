import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './grid/user/user.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
