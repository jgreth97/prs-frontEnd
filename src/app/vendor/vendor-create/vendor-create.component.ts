import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class'
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
//import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit 
{
  vendor: Vendor = new Vendor();
  saved: string = "Save";

  constructor(
    private vendserv: VendorService,
    private router: Router,
    //private sysserv: SystemService
  ) { }

  ngOnInit(): void 
  {
    //this.sysserv.checkLogin();

  }

  saves(): void
  {
    this.saved = "Save";
  }

  save(): void
  {
    this.vendserv.create(this.vendor).subscribe(
      res => {
        console.debug("Saved!");
        this.router.navigateByUrl("/vendor");
        this.saved = "Saved!";
      },
      err => {
        this.saved = "Did not save";
        console.error("Could Not Add New Vendor: ", err);
      }
    );
  }
}
