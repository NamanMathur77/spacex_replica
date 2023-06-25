import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/shared/navbar/navbar.module'
import { HomeservicesService } from 'src/services/homeservices.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  providers: [
    HomeservicesService
  ]
})
export class HomeModule { }
