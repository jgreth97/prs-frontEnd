import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/request/request.class';
import { RequestLine } from 'src/app/requestline/requestline.class';
import { RequestLineService } from 'src/app/requestline/requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit 
{

  request: Request = new Request();
  lines: RequestLine[] = [];

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
    if(!this.sysserv.isReviewer)
      this.router.navigateByUrl("/home");
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
  rejectReq():void
  {
    if(this.request.reasonForRejection != "")
      this.requestserv.reject(this.request).subscribe(
        res =>{
          console.debug("Request Rejected");
          this.router.navigateByUrl("review");
        },
        err => {
          console.error("Failed to reject", err);
        }
      ) 
  }
  approveReq():void
  {
    this.requestserv.approve(this.request).subscribe(
      res =>{
        console.debug("Request Approved");
        this.router.navigateByUrl("review");
      },
      err => {
        console.error("Failed to approve", err);
      }
    )
  }
}
