import { Component } from "@angular/core";
import { Toasty } from "@nativescript/core";

@Component({
    selector: "Agregar",
    templateUrl: "./agregar.component.html",
    styleUrls: ["./agregar.component.css"]
})
export class AgregarComponent {

    nombre = "";
    error = false;

    guardar() {
        if (this.nombre.length < 4) {
            this.error = true;
            return;
        }

        new Toasty({ text: "Guardado correctamente" }).show();
        this.error = false;
        this.nombre = "";
    }
}
