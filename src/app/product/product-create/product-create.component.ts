import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
//import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit 
{
  product: Product = new Product();
  vendors: Vendor[]=[];
  saved: string = "Save";


  constructor(
    private prodserv: ProductService,
    private router: Router,
    private vendserv: VendorService,
    //private sysserv: SystemService
  ) { }

  ngOnInit(): void 
  {
    //this.sysserv.checkLogin();
      this.vendserv.list().subscribe(
        res=>{
          console.log(res);
          this.vendors = res as Vendor[];
        },
        err =>
        {console.error(err);}
      )
  }

  saves(): void
  {
    this.saved = "Save";
  }

  save(): void
  {
    this.prodserv.create(this.product).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/product");
        this.saved = "Saved!";
      },
      err => {
        this.saved = "Did not save";
        console.error("Could Not Add New Product: ", err);
      }
    );
  }
}