import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyDComponent} from './lazy-d/lazy-d.component';


@NgModule({
  declarations: [
    LazyDComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyDComponent]
})
export class LazyDModule {
}
