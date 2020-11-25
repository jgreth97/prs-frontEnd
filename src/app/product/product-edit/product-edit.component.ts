import { Component, OnInit } from '@angular/core';
import{ ProductService} from '../product.service';
import {Product} from '../product.class'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    product: Product;

  constructor(
    private prodserv: ProductService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    //.id is the key value on the route 
    //snapshot takes a look at the route in that moment(handles quick switches)
    //params is a key value pair object(anything passed after this is a key(ex:id,:username))
    // + sign turns a tring into a number(Can use + or any)
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
    save(): void{
      console.log(this.product);
      this.prodserv.change(this.product).subscribe(
        res =>{
          console.debug("Product Change:",res)
          this.routed.navigateByUrl("/product");
        },
        err =>{
          console.error("Error Changing Product",err);
        }
      );
    }
  }
