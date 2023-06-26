import { Component, OnInit } from '@angular/core';
import { Links } from 'src/models/links';
import { HomeservicesService } from 'src/services/homeservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navbarLinks:Links[] = [
    {title:'Home', url:'https://api.spacexdata.com/v3/rockets'},
    {title: 'Contact', url: 'www.github.com'}
  ]
  constructor(private homeService:HomeservicesService) { }

  ngOnInit(): void {
  }
  clickedLink(url:any){
    this.homeService.getData(url).subscribe((data)=>{
      console.log(data);
    });
  }

}
