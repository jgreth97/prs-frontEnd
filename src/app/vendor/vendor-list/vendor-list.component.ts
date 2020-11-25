import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/core/system.service';
import { Vendor } from '../vendor.class'
import { VendorService } from '../vendor.service'
@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

vendors: Vendor[]=[];

  constructor(
    private vendserv: VendorService,
    //private sysserv: SystemService
  ) { }

  ngOnInit(): void {
    //this.sysserv.checkLogin();
    this.vendserv.list().subscribe(
      res => {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      err => {
        console.error(err);
      }
    );
  }

}

