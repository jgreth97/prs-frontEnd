import { Component, OnInit } from '@angular/core';
import{ VendorService} from '../vendor.service';
import {Vendor} from '../vendor.class'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
    vendor:Vendor;

  constructor(
    private vendserv: VendorService,
    private route: ActivatedRoute,
    private routed: Router
  ) { }
  ngOnInit(): void {
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
remove(): void
    {
        this.vendserv.remove(this.vendor).subscribe(
            res => {
                console.debug("Vendor has been deleted");
                this.routed.navigateByUrl("/vendor");
            },
            err => {
                console.error(err);
            }
        );
    }
}
