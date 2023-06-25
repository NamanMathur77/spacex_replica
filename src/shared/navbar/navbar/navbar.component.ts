import { Component, Input, OnInit } from '@angular/core';
import { Links } from 'src/models/links';
import { HomeservicesService } from 'src/services/homeservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() navbarLinks: Links[] | undefined;
  constructor(private homeService:HomeservicesService) {}

  ngOnInit(): void {}
  collapsed = true;
  showOptions = false;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.showOptions = !this.showOptions;
  }
  optionClicked(url:string = ''){
    this.homeService.getData(url).subscribe((data)=>{
      console.log(data);
    });
  }
}
