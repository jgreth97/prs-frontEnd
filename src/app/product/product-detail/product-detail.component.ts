import { Component, OnInit } from '@angular/core';
import{ ProductService} from '../product.service';
import {Product} from '../product.class'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    product:Product;

  constructor(
    private prodserv: ProductService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    this.prodserv.get(id).subscribe(
      res => {
        console.debug("Product:",res);
        this.product =res as Product;
      },
      err =>{
        console.error(err);}
    );
  }
remove(): void
    {
        this.prodserv.remove(this.product).subscribe(
            res => {
                console.debug("Product has been deleted");
                this.routed.navigateByUrl("/product");
            },
            err => {
                console.error(err);
            }
        );
    }
}
