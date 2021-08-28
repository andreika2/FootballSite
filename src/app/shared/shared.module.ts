import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    SharedHeaderComponent
  ],
  exports: [
    SharedHeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule { }
