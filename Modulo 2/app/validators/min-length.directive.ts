import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
    selector: "[minLen]",
    providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]
})
export class MinLengthDirective implements Validator {
    validate(control: AbstractControl) {
        return control.value && control.value.length >= 4 ? null : { minLen: true };
    }
}
