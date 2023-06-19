import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/models/links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navbarLinks:Links[] | undefined;
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
