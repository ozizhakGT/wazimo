import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import User from "./user.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  users: User[] = [];
  limit = 20;
  isLoading = true;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // get 20 first users
    this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.isLoading = false;
      })
  }

  // After 90% from the height window will fire this function to get more users
  onScroll() {
    this.isLoading = true;
    this.limit += this.limit/2;
    this.usersService.getUsers(this.limit)
      .subscribe((users: any[]) => {
        this.users = users;
        this.isLoading = false;
      })
  }

}
