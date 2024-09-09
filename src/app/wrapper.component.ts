import {
    ChangeDetectionStrategy,
    Component,
    createEnvironmentInjector,
    EnvironmentInjector,
    inject,
    InjectionToken,
    Injector,
    OnInit,
    viewChild,
    ViewContainerRef
} from "@angular/core";
import {RouterOutlet} from "@angular/router";

export const WRAPPER_TOKEN = new InjectionToken<string>('Wrapper');
export const WRAPPER_ENV_TOKEN = new InjectionToken<string>('WrapperEnv');

@Component({
    standalone: true,
    imports: [
        RouterOutlet
    ],
    template: `
        <router-outlet/>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'wrapper-content'}
})
export class WrapperContent {
}

@Component({
    selector: 'app-wrapper',
    standalone: true,
    template: `
        <h1>Wrapper</h1>
        <hr/>
        <ng-container #anchor/>
    `,
    providers: [{provide: WRAPPER_TOKEN, useValue: 'from Wrapper'}],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wrapper implements OnInit {
    anchor = viewChild.required('anchor', {read: ViewContainerRef});
    environmentInjector = inject(EnvironmentInjector);
    injector = inject(Injector);

    ngOnInit() {
        const envInjector = createEnvironmentInjector([
            {provide: WRAPPER_ENV_TOKEN, useValue: 'from WrapperEnv'}
        ], this.environmentInjector);
        const ref = this.anchor().createComponent(WrapperContent, {
            environmentInjector: envInjector,
            injector: this.injector
        });
        ref.changeDetectorRef.detectChanges();
    }
}