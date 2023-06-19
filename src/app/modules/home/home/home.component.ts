import { Component, OnInit } from '@angular/core';
import { Links } from 'src/models/links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navbarLinks:Links[] = [
    {title:'Home', url:'www.google.com'},
    {title: 'Contact', url: 'www.github.com'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
