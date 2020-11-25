import { Component, OnInit } from '@angular/core';
import{ VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
    vendor:Vendor;

  constructor(
    private vendserv: VendorService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
    //.id is the key value on the route 
    //snapshot takes a look at the route in that moment(handles quick switches)
    //params is a key value pair object(anything passed after this is a key(ex:id,:username))
    // + sign turns a tring into a number(Can use + or any)
    let id = +this.route.snapshot.params.id;
    this.vendserv.get(id).subscribe(
      res => {
        console.debug("Vendor:",res);
        this.vendor =res as Vendor;
      },
      err =>{
        console.error(err);}
    );
  }
    save(): void{
      console.log(this.vendor);
      this.vendserv.change(this.vendor).subscribe(
        res =>{
          console.debug("Vendor Change:",res)
          this.routed.navigateByUrl("/vendor");
        },
        err =>{
          console.error("Error Changing Vendor",err);
        }
      );
    }
  }
