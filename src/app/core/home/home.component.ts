import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User = null;
  admin = false;
  constructor(private sysServ: SystemService) { }

  ngOnInit(): void {
    this.user = this.sysServ.loggedInUser;
    this.admin = this.sysServ.isAdmin(); 
  }

}
