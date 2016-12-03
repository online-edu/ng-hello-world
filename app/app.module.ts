import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/**
 * @NgModule defines the set of injectable objects that are available in the injector
 * of this module.
 * `imports` sets angular module for the browser
 * `declarations` accepts the list of components to be injected
 * `bootstrap` main component that bootstraps the application 
 */
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }