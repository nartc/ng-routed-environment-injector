import {ChangeDetectionStrategy, Component, inject} from "@angular/core";
import {WRAPPER_ENV_TOKEN, WRAPPER_TOKEN} from "./wrapper.component";

@Component({
    standalone: true,
    template: `
        <h3>Routed Component</h3>
        <hr/>
        <p>Wrapper: {{ wrapper }}</p>
        <p>WrapperEnv: {{ wrapperEnv }}</p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Routed {
    wrapper = inject(WRAPPER_TOKEN);
    wrapperEnv = inject(WRAPPER_ENV_TOKEN);
}