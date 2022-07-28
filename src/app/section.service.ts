import {Injectable} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private readonly map = new Map<string, ComponentType<unknown>>();

  constructor() {
  }

  register(key: string, type: ComponentType<unknown>) {
    this.map.set(key, type);
  }

  getSectionType(key: string): ComponentType<unknown> | undefined {
    return this.map.get(key);
  }
}
