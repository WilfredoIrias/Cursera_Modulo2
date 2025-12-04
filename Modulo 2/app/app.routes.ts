import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./screens/home/home.component";
import { DetalleComponent } from "./screens/detalle/detalle.component";
import { AgregarComponent } from "./screens/agregar/agregar.component";

const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "detalle/:id", component: DetalleComponent },
    { path: "agregar", component: AgregarComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
