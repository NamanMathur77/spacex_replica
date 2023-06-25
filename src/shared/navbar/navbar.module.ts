import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeservicesService } from 'src/services/homeservices.service';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HomeservicesService
  ]
})
export class NavbarModule { }
