import { Component } from '@angular/core';
/**
 * @Component sets the class as an Angular Component and collects configuration metadata.
 * `moduleId` assigns module id at run time to map other dependencies.
 * `selector` accepts the name that is identified by HTML while rendering the content.
 * `template` content to be provided for the selector that will get rendered on the screen.  
 */
@Component({
    moduleId: module.id,
    selector: 'hello-world-app',
    template: `<img src="favicon.ico" />
            <h1>Hello World </h1>`
})
export class AppComponent { }