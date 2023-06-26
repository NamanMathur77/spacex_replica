import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';



@NgModule({
  declarations: [
    CoverComponent
  ],
  exports: [
    CoverComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoverModule { }
