import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyBComponent} from './lazy-b/lazy-b.component';
import {SectionService} from "../../../../../src/app/section.service";


@NgModule({
  declarations: [
    LazyBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyBComponent]
})
export class LazyBModule {
  constructor(sectionService: SectionService) {
    sectionService.register("B", LazyBComponent);
  }
}
