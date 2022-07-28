import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyAComponent} from './lazy-a/lazy-a.component';
import {SectionService} from "../../../../../src/app/section.service";


@NgModule({
  declarations: [
    LazyAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LazyAComponent]
})
export class LazyAModule {
  constructor(sectionService: SectionService) {
    sectionService.register("A", LazyAComponent);
  }
}
