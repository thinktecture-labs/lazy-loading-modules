import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyCComponent} from './lazy-c/lazy-c.component';

@NgModule({
  declarations: [
    LazyCComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyCComponent]
})
export class LazyCModule {
}
