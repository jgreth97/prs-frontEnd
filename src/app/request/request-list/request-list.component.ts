import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

requests: Request[]=[];
  constructor(
    private reqserv: RequestService,
    private sysserv: SystemService
  ) { }

  ngOnInit(): void {
    this.sysserv.checkLogin();
    this.reqserv.list().subscribe(
      res => {
        console.log(res);
        this.requests = res as Request[];
      },
      err => {
        console.error(err);
      }
    );
  }

}
