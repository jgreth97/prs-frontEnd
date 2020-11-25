import { Component, OnInit } from '@angular/core';
import{ RequestService} from '../request.service';
import { Request } from '../request.class'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
    request:Request;

  constructor(
    private reqserv: RequestService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.reqserv.get(id).subscribe(
      res => {
        console.debug("Request:",res);
        this.request =res as Request;
      },
      err =>{
        console.error(err);}
    );
  }
remove(): void
    {
        this.reqserv.remove(this.request).subscribe(
            res => {
                console.debug("Request has been deleted");
                this.routed.navigateByUrl("/request");
            },
            err => {
                console.error(err);
            }
        );
    }
}
