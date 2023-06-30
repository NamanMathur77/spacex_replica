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
    {title: 'Falcon 1', url: 'https://api.spacexdata.com/v3/rockets/falcon1'},
    {title: 'Falcon Heavy', url: 'https://api.spacexdata.com/v3/rockets/falconheavy'},
    {title: 'StarShip', url: 'https://api.spacexdata.com/v3/rockets/starship'},
  ]
  constructor(private homeService:HomeservicesService) { }
  RocketData:any;
  coverImage = '';
  rocketName = '';
  ngOnInit(): void {
  }
  clickedLink(url:any){
    this.homeService.getData(url).subscribe((data)=>{
      this.RocketData = data;
      console.log(this.RocketData)
      this.coverImage = this.RocketData.flickr_images[0];
      this.rocketName = this.RocketData.rocket_name;

    });
  }

}
