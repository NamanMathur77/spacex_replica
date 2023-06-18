import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  collapsed = true;
  showOptions = false;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
       this.showOptions = !this.showOptions;
     }

}
