import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestLineEditComponent implements OnInit 
{
  requestline: RequestLine = new RequestLine();
  products: Product[] = [];
  saved: string = "Save";

  constructor(
    private requestlineserv: RequestLineService,
    private productserv: ProductService,
    private sysserv: SystemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.sysserv.checkLogin();

    let id = this.route.snapshot.params.id;

    this.requestlineserv.get(id).subscribe(
      res => {
        console.debug("Line Item:", res);
        this.requestline = res;
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

  changes(): void
  {
    this.saved = "Save";
  }

  compare(a: Product, b: Product): boolean
  {
    return a.id === b.id;
  }

  save(): void
  {
    console.log(this.requestline);
    this.requestlineserv.change(this.requestline).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl(`request/line/${this.requestline.request.id}`);
        this.saved = "Saved!";
      },
      err => {
        this.saved = "Failed!";
        console.error("Could not edit Line Item: ", err);
      }
    );
  }
}
