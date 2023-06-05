import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordeonComponent } from './acordeon/acordeon.component';



@NgModule({
  declarations: [
    AcordeonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AcordeonComponent
  ]
})
export class SharedModule { }
