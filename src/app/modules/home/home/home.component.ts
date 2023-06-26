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
    {title:'Falcon 9', url:'https://api.spacexdata.com/v3/rockets/falcon9'},
    {title: 'Contact', url: 'www.github.com'}
  ]
  constructor(private homeService:HomeservicesService) { }
  RocketData:any;
  coverImage = '';
  ngOnInit(): void {
  }
  clickedLink(url:any){
    this.homeService.getData(url).subscribe((data)=>{
      this.RocketData = data;
      console.log(this.RocketData)
      this.coverImage = this.RocketData.flickr_images[0];
    });
  }

}
