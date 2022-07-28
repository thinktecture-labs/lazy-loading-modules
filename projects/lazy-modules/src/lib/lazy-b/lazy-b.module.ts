import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyBComponent } from './lazy-b/lazy-b.component';



@NgModule({
  declarations: [
    LazyBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyBComponent]
})
export class LazyBModule { }
