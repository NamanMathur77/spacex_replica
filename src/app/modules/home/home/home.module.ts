import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarModule } from 'src/shared/navbar/navbar.module'
import { HomeservicesService } from 'src/services/homeservices.service';
import { CoverModule } from 'src/shared/cover/cover.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CoverModule
  ],
  providers: [
    HomeservicesService
  ]
})
export class HomeModule { }
