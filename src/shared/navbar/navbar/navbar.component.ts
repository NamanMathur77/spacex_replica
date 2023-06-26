import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Links } from 'src/models/links';
import { HomeservicesService } from 'src/services/homeservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() navbarLinks: Links[] | undefined;
  @Output() clickedLink = new EventEmitter<any>;
  constructor(private homeService:HomeservicesService) {}

  ngOnInit(): void {}
  collapsed = true;
  showOptions = false;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.showOptions = !this.showOptions;
  }
  optionClicked(url:string = ''){
    this.clickedLink.emit(url);
  }
}
