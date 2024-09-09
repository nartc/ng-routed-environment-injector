import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Wrapper} from "./wrapper.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, Wrapper],
    template: `
        <h1>Welcome to {{ title }}!</h1>
        <app-wrapper/>
    `,
    styles: [],
})
export class AppComponent {
    title = 'ng-routed-environment-injector';
}
