import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyDComponent} from './lazy-d/lazy-d.component';
import {SectionService} from "../../../../../src/app/section.service";


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
  constructor(sectionService: SectionService) {
    sectionService.register("D", LazyDComponent);
  }
}
