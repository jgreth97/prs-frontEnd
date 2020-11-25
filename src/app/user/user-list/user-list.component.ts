import { Component, OnInit } from '@angular/core';
import {User} from '../user.class'
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

users: User[]=[];

  constructor(
    private userserv: UserService
  ) { }

  ngOnInit(): void {
    this.userserv.list().subscribe(
      res => {
        console.log(res);
        this.users = res as User[];
      },
      err => {
        console.log(err);
      }
    );
  }

}
