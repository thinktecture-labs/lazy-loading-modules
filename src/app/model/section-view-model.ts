import {ComponentPortal} from "@angular/cdk/portal";

export interface SectionViewModel {
  id: string;
  /**
   * Komponenten-Portal
   */
  componentPortal?: ComponentPortal<unknown>;

}
