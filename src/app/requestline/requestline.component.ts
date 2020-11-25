import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request/request.class';
import { RequestLine } from './requestline.class';
import { RequestLineService } from './requestline.service';
import { SystemService } from '../core/system.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestLineComponent implements OnInit 
{
  request: Request;
  lines: RequestLine[];

  constructor(
    private requestserv: RequestService,
    private linesserv: RequestLineService,
    private sysserv: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.sysserv.checkLogin();

    let id = this.route.snapshot.params.id;

    this.requestserv.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => {
        console.error(err);
      }
    );

    this.linesserv.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.lines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  multMath(a: number, b: number):number
  {
    return (a*b);
  }

  refreshL():void
  {
    let id = this.route.snapshot.params.id;

    this.linesserv.getLines(id).subscribe(
      res => {
        console.debug("Request Lines:", res);
        this.lines = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  refreshR():void
  {
    let id = this.route.snapshot.params.id;

    this.requestserv.get(id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
        
      },
      err => {
        console.error(err);
      }
    );
  }
  submit():void
  {
    this.request.reasonForRejection = "";
    this.requestserv.review(this.request).subscribe(
      res =>{

        console.debug("Submitted for review");
        this.refreshR();
      },
      err => {
        console.error("Failed to submit for review", err);
      }
    )
  }
  deleteLine(line:RequestLine):void
  {
    this.linesserv.remove(line).subscribe(
      res => {
        console.debug("Line Item deleted!");
        this.refreshL();
        this.refreshR();
      },
      err => {
        console.error("Could not delete line item: ", err);
      }
    );
  }
}
