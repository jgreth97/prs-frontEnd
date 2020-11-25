import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  message = '';
  username = '';
  password = '';
  user: User = null;

  constructor(
    private userserv: UserService,
    private sysserv: SystemService,
    private router: Router
  ) {}

 ngOnInit(): void {
    this.username = 'PropaneUser';
    this.password = 'Propane';
    this.sysserv.loggedInUser = null;
  }
  login(): void {
    console.log('loging in...');
    this.userserv.login(this.username, this.password).subscribe(
      (res) => {
        console.debug('User Login:', res);
        this.user = res as User;
        this.sysserv.loggedInUser = this.user;
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.error('Error logging in user:', err);
        this.message = 'invalid login';
      }
    );
  }
  
}