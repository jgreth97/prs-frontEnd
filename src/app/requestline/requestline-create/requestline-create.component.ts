import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestLineCreateComponent implements OnInit 
{
  request: Request = new Request();
  requestline: RequestLine = new RequestLine();
  products: Product[] = [];
  saved: string = "Save";

  constructor(
    private requestserv: RequestService,
    private requestlineserv: RequestLineService,
    private productserv: ProductService,
    private route: ActivatedRoute,
    private sysserv: SystemService,
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
        this.requestline.request = this.request;
      },
      err => {
        console.error(err);
      }
    );
    this.productserv.list().subscribe(
      res => 
      {
        console.log(res);
        this.products = res as Product[];
      },
      err =>
      {
        console.error(err);
      }
    )
  }
  newChange(): void
  {
    this.saved = "Save";
  }
  save(): void
  {
    console.log(this.requestline);
    this.requestlineserv.create(this.requestline).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl(`/request/line/${this.request.id}`);
        this.saved = "Saved!";
      },
      err => {
        this.saved = "Failed!";
        console.error("Could not add RequestLine: ", err);
      }
    );
  }
}
