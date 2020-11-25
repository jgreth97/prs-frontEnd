import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service'
import { User } from 'src/app/user/user.class'


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
    request: Request = new Request();
    saved: string = "Save"

  constructor(
    private reqserv: RequestService,
    private sysserv: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.sysserv.checkLogin();
  this.request.user = this.sysserv.loggedInUser;
}
save(): void{
  this.reqserv.create(this.request).subscribe(
    res => {
      console.debug("Saved");
      this.router.navigateByUrl("/request");
      this.saved = "Saved";
    },
    err => {
      this.saved ="Failed";
      console.error("Couldn't Create New Request",err);
    }
  );
}
}
