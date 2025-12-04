import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./screens/home/home.component";
import { DetalleComponent } from "./screens/detalle/detalle.component";
import { AgregarComponent } from "./screens/agregar/agregar.component";

import { MinLengthDirective } from "./validators/min-length.directive";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DetalleComponent,
        AgregarComponent,
        MinLengthDirective
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        FormsModule
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
