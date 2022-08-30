import {createNgModuleRef, Injectable, Injector} from '@angular/core';
import {LAZY_MODULE_IMPORT_FUNCTIONS} from "./lazy-modules.const";

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {

  constructor(private injector: Injector) {
  }

  async loadModule(key: string): Promise<void> {
    const loaderFunc = await LAZY_MODULE_IMPORT_FUNCTIONS.get(key);
    if (loaderFunc) {
      const lazyModule: any = await loaderFunc();
      createNgModuleRef(lazyModule, this.injector);
    }

  }


}
