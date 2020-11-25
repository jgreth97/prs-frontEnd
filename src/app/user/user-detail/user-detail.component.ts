import { Component, OnInit } from '@angular/core';
import{ UserService} from '../user.service';
import {User} from '../user.class'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    user:User;

  constructor(
    private userserv: UserService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.userserv.get(id).subscribe(
      res => {
        console.debug("User:",res);
        this.user =res as User;
      },
      err =>{
        console.error(err);}
    );
  }
remove(): void
    {
        this.userserv.remove(this.user).subscribe(
            res => {
                console.debug("User has been deleted");
                this.routed.navigateByUrl("/user");
            },
            err => {
                console.error(err);
            }
        );
    }
}
