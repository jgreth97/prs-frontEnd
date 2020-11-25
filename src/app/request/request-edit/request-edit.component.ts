import { Component, OnInit } from '@angular/core';
import{ RequestService} from '../request.service';
import {Request} from '../request.class'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
    request: Request;

  constructor(
    private reqserv: RequestService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    //.id is the key value on the route 
    //snapshot takes a look at the route in that moment(handles quick switches)
    //params is a key value pair object(anything passed after this is a key(ex:id,:username))
    // + sign turns a tring into a number(Can use + or any)
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
    save(): void{
      console.log(this.request);
      this.reqserv.change(this.request).subscribe(
        res =>{
          console.debug("Request Change:",res)
          this.routed.navigateByUrl("/request");
        },
        err =>{
          console.error("Error Changing Request",err);
        }
      );
    }
  }
