import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LazyContainerComponent} from './lazy-container/lazy-container.component';
import {PortalModule} from "@angular/cdk/portal";

@NgModule({
  declarations: [
    AppComponent,
    LazyContainerComponent
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
