import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Menu[]=[
    new Menu('home','/home'),
    new Menu('about','/about'),
    new Menu('user', '/user'),
    new Menu('vendor','/vendors'),
    new Menu('product','/products'),
    new Menu('request','/request'),
    new Menu('review', 'request/review')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
