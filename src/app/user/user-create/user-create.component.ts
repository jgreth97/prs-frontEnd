import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit 
{
  user: User = new User();
  saved: string = "Save";

  constructor(
    private userserv: UserService,
    private router: Router,
    private sysserv: SystemService
  ) { }

  ngOnInit(): void 
  {
    this.sysserv.checkLogin();

  }

  saves(): void
  {
    this.saved = "Save";
  }

  save(): void
  {
    this.userserv.create(this.user).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/user");
        this.saved = "Saved!";
      },
      err => {
        this.saved = "Did not save";
        console.error("Could Not Add New User: ", err);
      }
    );
  }
}