import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyCComponent} from './lazy-c/lazy-c.component';
import {SectionService} from "../../../../../src/app/section.service";

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
  constructor(sectionService: SectionService) {
    sectionService.register("C", LazyCComponent);
  }
}
