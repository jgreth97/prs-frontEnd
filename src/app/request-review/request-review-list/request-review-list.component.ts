import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  user: User = new User();

  constructor(
    private requestserv: RequestService,
    private sysserv: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.sysserv.checkLogin();
    if(!this.sysserv.isReviewer)
      this.router.navigateByUrl("/home");

    this.user = this.sysserv.loggedInUser;
    console.log(this.sysserv.loggedInUser);
    console.log(this.user);

    this.requestserv.requests(this.user.id).subscribe(
      res => 
      {
        console.log(res);
        this.requests = res as Request[];
        for(let r of this.requests)
        {
          r.userName = r.user.userName;
        }
      },
      err =>
      {
        console.error(err);
      }
    )
  }
}
