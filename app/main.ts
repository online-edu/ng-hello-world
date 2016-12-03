/**
 * Import `AppModule` a.k.a. Root Module to bootstrap the application 
 * `platformBrowserDynamic` creates an instance of an `@NgModule` for a given platform
 *  using the given runtime compiler.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);