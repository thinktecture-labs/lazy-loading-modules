import {Compiler, Injectable, Injector, NgModuleFactory} from '@angular/core';
import {LAZY_MODULE_IMPORT_FUNCTIONS} from "./lazy-modules.const";
import {SectionService} from "./section.service";

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {

  constructor(private readonly compiler: Compiler, private injector: Injector, private readonly sectionService: SectionService) {
  }

  async loadModule(key: string): Promise<void> {
    const loaderFunc = await LAZY_MODULE_IMPORT_FUNCTIONS.get(key);
    if (loaderFunc) {
      const lazyModule = await loaderFunc();
      if (key === "D") {
        await this.delay(3000);
      }
      const moduleFacotry = await this.loadModuleFactory(lazyModule);
      const module = moduleFacotry.create(this.injector);
    }

  }

  private async loadModuleFactory(t: any): Promise<NgModuleFactory<unknown>> {
    if (t instanceof NgModuleFactory) {
      return t;
    } else {
      return await this.compiler.compileModuleAsync(t);
    }
  }

  private delay(timespan: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, timespan));
  }
}
