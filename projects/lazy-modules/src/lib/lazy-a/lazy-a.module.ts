import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyAComponent } from './lazy-a/lazy-a.component';



@NgModule({
  declarations: [
    LazyAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyAComponent]
})
export class LazyAModule { }
