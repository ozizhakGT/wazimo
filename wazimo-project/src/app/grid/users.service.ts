import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import User from "./user.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'http://localhost:5012/api'
  constructor(private http: HttpClient) {}


  /*
  * getting users
  * query param limit number of users
  * */
  getUsers(limit=20) {
    return this.http.get<User[]>(`${this.baseUrl}/users?limit=${limit}`)
  }
}
