import {Component, OnInit} from '@angular/core';
import {ModuleLoaderService} from "../module-loader.service";
import {SectionViewModel} from "../model/section-view-model";
import {BehaviorSubject} from "rxjs";
import {SectionService} from "../section.service";
import {ComponentPortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-lazy-container',
  templateUrl: './lazy-container.component.html',
  styleUrls: ['./lazy-container.component.scss']
})
export class LazyContainerComponent implements OnInit {

  public sectionVms$: BehaviorSubject<SectionViewModel[]> = new BehaviorSubject<SectionViewModel[]>([]);

  private readonly sectionsToShow: string[] = ["A", "B", "C", "D"];

  constructor(private readonly moduleLoaderService: ModuleLoaderService, private readonly sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.sectionVms$.next(this.loadData());
    this.initSections();
  }

  // Mockmethode  für DataService
  private loadData(): SectionViewModel[] {
    let viewModels: SectionViewModel[] = []
    this.sectionsToShow.forEach(key => {
      viewModels = [...viewModels, {id: key}]
    });

    return viewModels;
  }

  private initSections() {
    this.sectionsToShow.forEach(sectionKey => {
      this.moduleLoaderService.loadModule(sectionKey).then(() => this.updateViewModel(sectionKey))
    })
  }

  private updateViewModel(key: string) {
    const sectionType = this.sectionService.getSectionType(key);
    if (sectionType) {
      const vmWithType = {id: key, componentPortal: new ComponentPortal(sectionType)}
      const newVMs = [...this.sectionVms$.value.filter(section => section.id !== key), vmWithType];
      this.sectionVms$.next(newVMs);
    }
  }

}
